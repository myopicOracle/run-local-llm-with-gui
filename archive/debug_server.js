// https://claude.ai/chat/6345f646-9206-409b-be38-3b8e39d98f9f

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Ollama API endpoint
const OLLAMA_API = 'http://localhost:11434/api';

app.post('/predict', async (req, res) => {
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



// Old Version 2.0

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const path = require('path'); // Added path module

// const app = express();
// app.use(cors());
// app.use(express.json());

// const OLLAMA_URL = 'http://localhost:11434/api/generate';
// // const OLLAMA_URL = 'http://localhost:11434/api/chat'; // for fully-formed responses

// app.post('/predict', async (req, res) => {
//   const { prompt } = req.body;
//   if (!prompt || !prompt.trim()) {
//     return res.status(400).json({ error: 'No prompt provided' });
//   }
//   try {
//     const response = await axios.post(OLLAMA_URL, { model: 'tinyllama', prompt }, { timeout: 30000 });
//     const text = response.data.choices[0].text;
//     res.json({ response: text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.use(express.static(path.join(__dirname, 'public'))); // Updated to use path.join

// app.get('/', (req, res) => { // Added explicit root route
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });



// Old Version 1.0

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const OLLAMA_URL = 'http://localhost:11434/api/generate';

// app.post('/predict', async (req, res) => {
//   const { prompt } = req.body;
//   if (!prompt || !prompt.trim()) {
//     return res.status(400).json({ error: 'No prompt provided' });
//   }
//   try {
//     const response = await axios.post(OLLAMA_URL, { model: 'tinyllama', prompt }, { timeout: 30000 });
//     const text = response.data.choices[0].text;
//     res.json({ response: text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.use(express.static('public'));

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });
