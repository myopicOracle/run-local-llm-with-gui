// Default to localhost in development, override in production
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/**
 * Sends a prompt to the Ollama LLM and returns a stream reader
 * @param {string} prompt - The prompt to send to the LLM
 * @param {Function} onChunk - Callback for each chunk of text received
 * @param {Function} onDone - Callback when stream is complete
 * @param {Function} onError - Callback for errors
 */
export async function generateCompletion(prompt, onChunk, onDone, onError) {
  try {
    const response = await fetch(`${API_URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Get a reader from the response body stream
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';
    
    // Process the stream
    while (true) {
      const { value, done } = await reader.read();
      
      if (done) {
        if (onDone) onDone(fullResponse);
        break;
      }
      
      // Convert the chunk to text
      const chunk = decoder.decode(value, { stream: true });
      
      // Process each line (each SSE event)
      const lines = chunk.split('\n\n');
      for (const line of lines) {
        if (!line.trim() || !line.startsWith('data: ')) continue;
        
        const eventData = line.substring(6); // Remove 'data: ' prefix
        
        if (eventData === '[DONE]') {
          continue; // End of stream marker
        }
        
        try {
          const jsonData = JSON.parse(eventData);
          
          if (jsonData.response) {
            // Append this chunk to the full response
            fullResponse += jsonData.response;
            
            // Call the callback with the chunk
            if (onChunk) onChunk(jsonData.response, fullResponse);
          }
        } catch (err) {
          console.error('Error parsing JSON:', err, eventData);
        }
      }
    }
  } catch (error) {
    console.error('Error in generateCompletion:', error);
    if (onError) onError(error);
  }
}

/**
 * Checks if the backend API is reachable
 * @returns {Promise<boolean>} True if the API is reachable
 */
export async function checkApiHealth() {
  try {
    const response = await fetch(`${API_URL}/health`);
    const data = await response.json();
    return data.status === 'ok';
  } catch (error) {
    console.error('API health check failed:', error);
    return false;
  }
}