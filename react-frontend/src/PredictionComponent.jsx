import React, { useState } from 'react';

const PredictionComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getPrediction = async (prompt) => {
    setIsLoading(true);
    setResponse('Waiting for response...');
    let fullResponse = '';

    try {
      const response = await fetch('https://87d8-135-0-165-43.ngrok-free.app/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n\n');
        for (const line of lines) {
          if (!line.trim() || !line.startsWith('data: ')) continue;

          const eventData = line.substring(6);

          if (eventData === '[DONE]') {
            continue;
          }

          try {
            const jsonData = JSON.parse(eventData);

            if (jsonData.response) {
              fullResponse += jsonData.response;
              setResponse((prev) => `${prev}${jsonData.response}`);
            }
          } catch (err) {
            console.error('Error parsing JSON:', err, eventData);
          }
        }
      }

      setResponse(`Complete Response: ${fullResponse}`);
    } catch (error) {
      console.error('Error in getPrediction:', error);
      setResponse(`Request failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt.');
      return;
    }
    getPrediction(prompt);
  };

  return (
    <div>
      <div>
        <label htmlFor="prompt">Enter Prompt:</label>
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
      <div id="response">
        <strong>{response}</strong>
      </div>
    </div>
  );
};

export default PredictionComponent;