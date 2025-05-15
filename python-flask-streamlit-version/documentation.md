<!-- writing this because the setup was a little finnicky -->

# Summary of Setup Steps

1. In Git Bash (or PowerShell), from the project root run:

   ```bash
   python -m venv venv
   source venv/Scripts/activate  # Git Bash: cd into Scripts, then ". activate", then cd ..
   ```

2. Create/update `requirements.txt`:

   ```
   flask
   flask-cors
   requests
   streamlit
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Launch Ollama’s HTTP Server

Rather than invoking Ollama via CLI subprocesses, run it as a daemon you can query over HTTP:

```bash
# Start the Ollama HTTP API (default port 11434)
ollama serve
``` 

*Below is original method, but sometimes it starts and runs ollama prematurely. Try the above adjusted method first.*
<!-- 
```bash
# Ensure your model is available
ollama list
ollama pull tinyllama

# Start the Ollama HTTP API (default port 11434)
ollama serve tinyllama # Note adding tinyllama after "ollama serve" causes problems. At least in Git Bash, it seems to only take the 2 args (ollama, serve)
``` -->


5. Revised Flask API (`flask_api/app.py`)

```python

from flask import Flask, request, jsonify
import subprocess
import json

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    prompt = request.json.get('prompt')
    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400

    try:
        # Run Ollama using subprocess and stream output
        result = subprocess.run(
            ["ollama", "run", "tinyllama", prompt],
            capture_output=True, text=True, check=True
        )

        # Try to parse as JSON; fallback to raw text
        try:
            # If output is JSON, parse it
            parsed = json.loads(result.stdout)
            response = parsed.get("response", result.stdout)
        except json.JSONDecodeError:
            # If output is plain text, use as-is
            response = result.stdout.strip()

        return jsonify({"response": response})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.stderr.strip()}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

```

6. Run the Flask API

If any missing, install with:

```bash
pip install flask-cors
```

Run with:

```bash
python app.py
```
<!-- OR (python -m app.py) OR (flask run) but try 1 first -->



1. Revised Streamlit GUI (`streamlit_gui/app.py`)

```python

import streamlit as st
import requests

st.set_page_config(page_title="Intelli-G v1.0")
st.title("Gary's Super AI Model")

prompt = st.text_area("Enter your prompt:", height=150)

if st.button("Submit"):
    if not prompt.strip():
        st.warning("Please enter a prompt.")
    else:
        with st.spinner("Waiting on the model…"):
            try:
                r = requests.post(
                    "http://localhost:5000/predict",
                    json={"prompt": prompt},
                    timeout=60  # ← Match or exceed Flask timeout
                )
                r.raise_for_status()
                result = r.json()
                if result.get("error"):
                    st.error(f"API error: {result['error']}")
                else:
                    st.markdown("**Response:**")
                    st.write(result.get("response", ""))
            except Exception as err:
                st.error(f"Request failed: {err}")


```

8. Run Streamlit

Might run into trouble saying command not found, so install it again

```bash
pip install streamlit
```

Save the updated reqs

```bash
pip freeze > requirements.txt
```

Run it:

```bash
streamlit run app.py
```


9. 


---

## **Final requirements.txt**

```txt
altair==5.5.0
attrs==25.3.0
blinker==1.9.0
cachetools==5.5.2
certifi==2025.4.26
charset-normalizer==3.4.2
click==8.1.8
colorama==0.4.6
Flask==3.1.0
flask-cors==5.0.1
gitdb==4.0.12
GitPython==3.1.44
idna==3.10
itsdangerous==2.2.0
Jinja2==3.1.6
jsonschema==4.23.0
jsonschema-specifications==2025.4.1
MarkupSafe==3.0.2
narwhals==1.38.2
numpy==2.2.5
packaging==24.2
pandas==2.2.3
pillow==11.2.1
protobuf==6.30.2
pyarrow==20.0.0
pydeck==0.9.1
python-dateutil==2.9.0.post0
pytz==2025.2
referencing==0.36.2
requests==2.32.3
rpds-py==0.24.0
six==1.17.0
smmap==5.0.2
streamlit==1.45.0
tenacity==9.1.2
toml==0.10.2
tornado==6.4.2
typing_extensions==4.13.2
tzdata==2025.2
urllib3==2.4.0
watchdog==6.0.0
Werkzeug==3.1.3

```




# ngrok
https://grok.com/chat/d4281abd-7e7b-46a1-b42c-24c8990093c0

To accomplish your goals, I’ll provide comprehensive and easy-to-follow steps for two tasks: (1) setting up ngrok to tunnel and expose your Flask API, including configuring your credentials via the ngrok dashboard, and (2) connecting your Streamlit GUI and the ngrok tunnel to a new project in Vercel. Since your Streamlit GUI (running at `http://localhost:8501`) and Flask API are working locally with your Ollama-hosted LLM model, I’ll keep the steps straightforward and tailored to your setup.

---

## **Task 1: Set Up ngrok for Tunneling and Exposing Your Flask API**

Ngrok allows you to expose your locally running Flask API to the internet via a secure tunnel. You’ve mentioned needing to set up credentials in the ngrok dashboard, so I’ll include those steps along with the CLI setup.

### **Steps:**

1. **Sign Up for an ngrok Account**  
   - Visit [ngrok.com](https://ngrok.com) and sign up for a free account (or log in if you already have one).  
   - After signing up, you’ll land on the ngrok dashboard, where you can manage your tunnels and credentials.

2. **Obtain Your Authtoken**  
   - In the ngrok dashboard, go to the **"Your Authtoken"** section (typically under **"Setup & Installation"** or in the sidebar).  
   - Copy the authtoken displayed. This token authenticates your ngrok client and is required for tunneling.

3. **Install ngrok (If Not Already Done)**  
   - Download ngrok from the [ngrok download page](https://ngrok.com/download) for your operating system.  
   - Install it by following the instructions (e.g., unzip the file on macOS/Linux or run the installer on Windows).

4. **Configure Your Authtoken**  
   - Open a terminal (or command prompt) and run this command, replacing `<your-authtoken>` with the token you copied:  
     ```bash
     ngrok authtoken <your-authtoken>
     ```  
   - This saves the authtoken to your ngrok configuration, linking your CLI to your dashboard account.

5. **Start Your Flask API**  
   - Ensure your Flask API is running locally. For example, if it’s on port 5000, start it with:  
     ```bash
     python your_flask_app.py
     ```  
   - Verify it works by accessing `http://localhost:5000` in your browser or with `curl`.

6. **Start the ngrok Tunnel**  
   - In a new terminal window, run:  
     ```bash
     ngrok http 5000
     ```  
   - Ngrok will generate a public URL (e.g., `https://<random-string>.ngrok.io`) that forwards to `http://localhost:5000`.  
   - **Note:** Keep this terminal open to maintain the tunnel.

7. **Test the Tunnel**  
   - Open the ngrok URL in your browser or test it with:  
     ```bash
     curl https://<random-string>.ngrok.io/your-api-endpoint
     ```  
   - For debugging, visit `http://localhost:4040` in your browser to see ngrok’s local web interface, which logs requests and responses.

---

## **Task 2: Connect Your Streamlit GUI and ngrok Tunnel to a New Project in Vercel**

Your Streamlit GUI is running at `http://localhost:8501` and relies on your local Flask API. Since Vercel is primarily for front-end and serverless deployments, directly deploying a Streamlit app (a Python server) to Vercel is complex and not ideal. Instead, I’ll provide two practical options: (1) exposing both your GUI and API via ngrok for easy access, and (2) deploying a simple Vercel front-end that links to your ngrok-exposed services. Option 1 is recommended for testing your current setup.

### **Option 1: Expose Both Streamlit GUI and Flask API via ngrok (Recommended for Simplicity)**

Here, you’ll use ngrok to make both your Streamlit GUI and Flask API publicly accessible. Since your Streamlit app calls the local API, this works seamlessly when both run on the same machine.

#### **Steps:**

1. **Expose the Flask API via ngrok**  
   - Complete **Task 1** above to get your API URL (e.g., `https://api.ngrok.io`).

2. **Expose the Streamlit GUI via ngrok**  
   - Ensure your Streamlit app is running on port 8501:  
     ```bash
     streamlit run your_streamlit_app.py
     ```  
   - In a new terminal, run:  
     ```bash
     ngrok http 8501
     ```  
   - Note the GUI’s ngrok URL (e.g., `https://gui.ngrok.io`).

3. **Verify Access**  
   - Open `https://gui.ngrok.io` in your browser. Your Streamlit GUI should load and interact with the local API (e.g., `http://localhost:5000`) as it did before, since both are on the same machine.  
   - Test prompting the GUI to ensure it communicates with the API correctly.

4. **Optional: Add a Vercel Landing Page**  
   - To fulfill the Vercel requirement, create a simple static page linking to your ngrok URLs:  
     - Create an `index.html` file:  
       ```html
       <!DOCTYPE html>
       <html>
       <head>
         <title>My LLM Project</title>
       </head>
       <body>
         <h1>My LLM Project</h1>
         <p><a href="https://gui.ngrok.io">Streamlit GUI</a></p>
         <p><a href="https://api.ngrok.io">Flask API</a></p>
       </body>
       </html>
       ```  
     - Push this to a Git repository (e.g., GitHub).  
     - In Vercel, create a new project, connect your repository, and deploy it. You’ll get a URL (e.g., `https://your-project.vercel.app`) with links to your ngrok tunnels.

---

### **Option 2: Deploy a Custom Front-End to Vercel That Uses the ngrok-Exposed API**

If you want a custom interface on Vercel instead of Streamlit, you can deploy a static HTML/JS page that calls your ngrok-exposed API.

#### **Steps:**

1. **Expose the Flask API via ngrok**  
   - Follow **Task 1** to get your API URL (e.g., `https://api.ngrok.io`).

2. **Build a Simple Front-End**  
   - Create an `index.html` file with JavaScript to call your API:  
     ```html
     <!DOCTYPE html>
     <html>
     <head>
       <title>LLM Client</title>
     </head>
     <body>
       <h1>Interact with LLM</h1>
       <button onclick="fetchData()">Get Response</button>
       <pre id="result"></pre>
       <script>
         function fetchData() {
           fetch('https://api.ngrok.io/your-api-endpoint')
             .then(response => response.json())
             .then(data => document.getElementById('result').textContent = JSON.stringify(data, null, 2))
             .catch(error => console.error('Error:', error));
         }
       </script>
     </body>
     </html>
     ```  
   - Replace `https://api.ngrok.io/your-api-endpoint` with your ngrok URL and endpoint.

3. **Deploy to Vercel**  
   - Push `index.html` to a Git repository.  
   - In Vercel, create a new project, connect the repository, and deploy. You’ll get a URL (e.g., `https://your-project.vercel.app`).

4. **Handle CORS**  
   - If your API rejects requests from Vercel due to cross-origin issues, enable CORS in Flask:  
     - Install `flask-cors`:  
       ```bash
       pip install flask-cors
       ```  
     - Add to your Flask app:  
       ```python
       from flask_cors import CORS
       CORS(app)  # Allows all origins (use cautiously)
       ```  
     - For security, specify your Vercel domain later (e.g., `CORS(app, origins=["https://your-project.vercel.app"])`).

5. **Test It**  
   - Visit your Vercel URL and click the button to ensure it fetches data from your API.

---

## **Additional Tips**

- **Ngrok Free Tier:** The URLs change each time you restart ngrok. For a fixed URL, consider a paid plan with a static domain.  
- **Keep Tunnels Running:** Don’t close the ngrok terminal windows during testing.  
- **Local Machine:** Since your LLM is hosted locally via Ollama, keep your machine on and both apps running.  
- **Streamlit on Vercel:** Deploying Streamlit directly to Vercel isn’t practical here due to its server requirements. Option 1 leverages your existing setup best.

With these steps, you’ll have your API exposed via ngrok and your Streamlit GUI either accessible via ngrok or linked through a Vercel project. Let me know if you need more help!

