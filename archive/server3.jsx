const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Ollama API endpoint
const OLLAMA_API = 'http://localhost:11434/api';

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: 'No prompt provided' });
  }
  
  try {
    console.log(`Sending prompt to Ollama: "${prompt}"`);
    
    const response = await axios.post(`${OLLAMA_API}/generate`, {
      model: 'tinyllama',
      prompt: prompt
    }, { 
      timeout: 30000 
    });
    
    console.log('Ollama response:', response.data);
    
    // Return the response directly - examining what we get back
    res.json({ 
      response: response.data.response || response.data.text || JSON.stringify(response.data) 
    });
  } catch (error) {
    console.error('Error calling Ollama:', error.message);
    if (error.response) {
      console.error('Response error data:', error.response.data);
    }
    res.status(500).json({ error: error.message });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Ollama API endpoint: ${OLLAMA_API}`);
});