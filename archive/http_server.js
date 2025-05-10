const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Use the completion endpoint for a complete response
const OLLAMA_API = 'http://localhost:11434/api/chat';

app.post('/predict', async (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: 'No prompt provided' });
  }
  
  try {
    const response = await axios.post(OLLAMA_API, {
      model: 'tinyllama',
      messages: [{ role: 'user', content: prompt }]
    });
    
    // Extract the full response text
    const text = response.data.message?.content || "No response received";
    res.json({ response: text });
  } catch (error) {
    console.error('Error:', error.message);
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
});