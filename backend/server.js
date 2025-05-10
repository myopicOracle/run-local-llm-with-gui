const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path'); // Added path module

const app = express();
app.use(cors());
app.use(express.json());

const OLLAMA_API = 'http://localhost:11434/api';

app.post('/predict', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: 'No prompt provided' });
  }
  try {
    const response = await axios.post(`${OLLAMA_API}/generate`, { 
      model: 'tinyllama', 
      prompt: prompt 
    }, { 
      timeout: 30000 
    });

    const text = response.data.response;
    res.json({ response: text });
  } catch (error) {
    console.error('Error details:', error.message);
    if (error.response) {
      console.error('Error response:', error.response.data);
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
});