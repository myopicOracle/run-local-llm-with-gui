async function getPrediction(prompt) {
  const responseDiv = document.getElementById('response');
  responseDiv.innerHTML = 'Waiting for response...';

  try {
    const res = await fetch('/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (data.error) {
      responseDiv.innerHTML = `Error: ${data.error}`;
    } else if (data.response) {
      responseDiv.innerHTML = `<strong>Response:</strong> ${data.response}`;
    } else {
      responseDiv.innerHTML = 'Error: No response received';
    }
  } catch (error) {
    console.error('Error in getPrediction:', error);
    responseDiv.innerHTML = `Request failed: ${error.message}`;
  }
}

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', () => {
  const prompt = document.getElementById('prompt').value.trim();
  if (!prompt) {
    alert('Please enter a prompt.');
    return;
  }
  getPrediction(prompt);
});
