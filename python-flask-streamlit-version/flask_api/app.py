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