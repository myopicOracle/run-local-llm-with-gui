# with streaming response handling and JSON-safe logic
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






# OLD 
# -----------
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import requests

# app = Flask(__name__)
# CORS(app)  # ← Enables cross-origin requests :contentReference[oaicite:7]{index=7}

# OLLAMA_URL = "http://localhost:11434/api/generate"

# @app.route("/predict", methods=["POST"])
# def predict():
#     data = request.get_json() or {}
#     prompt = data.get("prompt", "").strip()
#     if not prompt:
#         return jsonify({"error": "No prompt provided"}), 400

#     try:
#         resp = requests.post(
#             OLLAMA_URL,
#             json={"model": "tinyllama:latest", "prompt": prompt},
#             timeout=30  # ← Prevents infinite hang :contentReference[oaicite:8]{index=8}
#         )
#         resp.raise_for_status()
#         text = resp.json().get("choices", [{}])[0].get("text", "")
#         return jsonify({"response": text})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000, debug=True)
