# Revised Steps to Set Up & Run Project

## 1. Navigate to the `backend` directory and initialize a Node.js project:

```bash
cd backend
npm init -y
```

## 2. Install the required dependencies:

```bash
npm install express cors axios
```

## 3. Create the Express.js Server. Place in `backend/` directory.

```javascript
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
    
    // Set headers for SSE (Server-Sent Events)
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    // Make a request to Ollama API with responseType: 'stream'
    const response = await axios.post(`${OLLAMA_API}/generate`, {
      model: 'tinyllama',
      prompt: prompt,
      stream: true // Enable streaming
    }, { 
      responseType: 'stream',
      timeout: 60000 
    });
    
    console.log('Stream connected to Ollama');
    
    // Pipe the response stream directly to our response
    response.data.on('data', (chunk) => {
      const chunkStr = chunk.toString();
      try {
        // Send each chunk as a SSE event
        res.write(`data: ${chunkStr}\n\n`);
      } catch (error) {
        console.error('Error processing chunk:', error);
      }
    });
    
    response.data.on('end', () => {
      console.log('Stream ended');
      // Send a final event signaling the end of the stream
      res.write('data: [DONE]\n\n');
      res.end();
    });
    
    response.data.on('error', (err) => {
      console.error('Stream error:', err);
      res.end();
    });
    
  } catch (error) {
    console.error('Error connecting to Ollama:', error.message);
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
```

## 4. Create the Local GUI. Place these files in the `backend/public` directory.

- **index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Local LLM GUI</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Local AI Model Interface</h1>
  <textarea id="prompt" rows="5" placeholder="Enter your prompt..."></textarea>
  <button id="submit">Submit</button>
  <div id="response"></div>
  <script src="script.js"></script>
</body>
</html>
```

- **script.js**:
```javascript
async function getPrediction(prompt) {
const responseDiv = document.getElementById('response');
responseDiv.innerHTML = 'Waiting for response...';

// Store the complete response
let fullResponse = '';

try {
  // Make a fetch request that will handle the streaming response
  const response = await fetch('/generate', {
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
  
  // Read the stream
  while (true) {
    const { value, done } = await reader.read();
    
    if (done) {
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
          
          // Update the UI with the current accumulated response
          responseDiv.innerHTML = `<strong>Response:</strong> ${fullResponse}`;
        }
      } catch (err) {
        console.error('Error parsing JSON:', err, eventData);
      }
    }
  }
  
  responseDiv.innerHTML = `<strong>Complete Response:</strong> ${fullResponse}`;
  
} catch (error) {
  console.error('Error in getPrediction:', error);
  responseDiv.innerHTML = `Request failed: ${error.message}`;
}
}

document.getElementById('submit').addEventListener('click', () => {
const prompt = document.getElementById('prompt').value.trim();
if (!prompt) {
  alert('Please enter a prompt.');
  return;
}
getPrediction(prompt);
});
```

- **styles.css** (optional):
```css
body { font-family: Arial, sans-serif; margin: 20px; }
textarea { width: 100%; margin-bottom: 10px; }
button { padding: 10px 20px; }
#response { margin-top: 20px; }
```


## 5. Launch Ollama’s HTTP Server

Ensure Ollama is running locally:

- Pull the model first:

   ```bash
   ollama pull tinyllama
   ```

- Then start the Ollama HTTP API:

```bash
ollama serve
```
***Keep this terminal open.

*NOTE: ***the ollama serve command does not accept any arguments, such as tinyllama. Simply run ollama serve to start the Ollama HTTP server, and ensure the tinyllama model is pulled beforehand with ollama pull tinyllama.***

If you get this error: 
```bash
Error: listen tcp 127.0.0.1:11434: bind: Only one usage of each socket address (protocol/network address/port) is normally permitted.
```
Then kill the ollamaserver that was started when you ran "ollama pull ...". Go to system tray to kill, b/c task manager end task will cause it to restart immediately. 

Then, again run:

```bash
ollama serve
```
You should see a 'listening' thread as the output, which should respond to API request from your .js file.

(*Necessary because a newly started ollama serve ensures you have control over the instance, allowing you to manage its state or troubleshoot issues more effectively.)

## 6. Run the Local Backend and GUI

1. Start the Express.js server:

   ```bash
   node backend/server.js
   ```

2. Open your browser and go to `http://localhost:5000` to access the local GUI.

3. Test by entering a prompt (e.g., "1 + 1 =") and verifying the response.


## 7. Setup Ngrok and Get Authtoken

[Post Sign Up Page](https://dashboard.ngrok.com/get-started/setup/)

***Option 1: Download***
[E.g. Win 64-bit](https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip)

***Option 2: CLI***
Install ngrok via Chocolatey - needs elevated Admin privileges:

```bash
choco install ngrok
```
> Success looks like: "The install of ngrok was successful. Deployed to 'C:\ProgramData\chocolatey\lib\ngrok\tools'"

Add authtoken to default ngrok.yml via:

*Option 1: CLI*
```bash
ngrok config add-authtoken $YOUR_AUTHTOKEN
```

[Find your authtoken: https://dashboard.ngrok.com/get-started/your-authtoken](https://dashboard.ngrok.com/get-started/your-authtoken)

*Option 2: Config Direct Edit*

```ngrok.yml
agent:
  authtoken: <your-authtoken>
```

*ngrok.yml Overview
[ngrok Agent Configuration File](https://ngrok.com/docs/agent/config/)
> The ngrok agent supports an optional, YAML configuration file which provides you with the power to run multiple tunnels simultaneously as well as to tweak some of its more advanced settings.

Find config file with: 

```bash
ngrok config check
```

Default locations:
- Linux: ~/.config/ngrok/ngrok.yml
- MacOS (Darwin): ~/Library/Application Support/ngrok/ngrok.yml
- Windows: "%HOMEPATH%\AppData\Local\ngrok\ngrok.yml"


## 8. Start Ollama & Node.js server (if not already running)

Shutdown Ollama server via Task Manager or Tray icon, then:
```bash
ollama serve
```
*should get indication server is listening 

From project root, cd into folder with server.js, then:
```bash
node server.js
```
*should see:
> $ node server.js
> Server running on http://localhost:5000
> Ollama API endpoint: http://localhost:11434/api

Verify running at: http://localhost:5000/
- At this point you should see the interface in browser and be able to enter prompt, send, and receive a complete response. If not, retrace your steps.


## 9. Start ngrok

```bash
ngrok http 5000
```
> change 5000 to whatever port your Node server is running on

You should get a response with information like Session Status, Account, Version, Region etc.
> The important bit is "Forwarding", next to which you'll see a https address pointing to your local Node server address. The first address is your randomly generated dynamic ngrok url (if on free plan). If baller and pay to play, then you can get static url.
> e.g. https://87d8-135-0-165-43.ngrok-free.app/ -> http://localhost:5000 


Test the ngrok URL by sending a request:
```bash
curl -X POST https://87d8-135-0-165-43.ngrok-free.app/generate -H "Content-Type: application/json" -d '{"prompt":"Hello"}'
```
*Copy URL for use in front-end.


## 10. Deploy to Front End

Copy the backend GUI files to a new directory that you'll upload to GitHub to prep deploy on Vercel. Update `script.js`, swapping path of local Node implmentation for the ngrok url. 

That's it.

Git init, push to GitHub, and the rest if (Vercel) history.

---
**content last updated 05-10-2025*