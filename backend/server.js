const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const OLLAMA_URL = 'http://localhost:11434/api/generate';

app.post('/predict', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: 'No prompt provided' });
  }
  try {
    const response = await axios.post(OLLAMA_URL, { model: 'tinyllama', prompt }, { timeout: 30000 });
    const text = response.data.choices[0].text;
    res.json({ response: text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use(express.static('public'));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
