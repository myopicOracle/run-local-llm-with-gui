document.getElementById('submit').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim();
  if (!prompt) {
    alert('Please enter a prompt.');
    return;
  }
  const responseDiv = document.getElementById('response');
  responseDiv.innerHTML = 'Waiting for response...';
  try {
    const res = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    if (data.error) {
      responseDiv.innerHTML = `Error: ${data.error}`;
    } else {
      responseDiv.innerHTML = `<strong>Response:</strong> ${data.response}`;
    }
  } catch (error) {
    responseDiv.innerHTML = `Request failed: ${error.message}`;
  }
});
