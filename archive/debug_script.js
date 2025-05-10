document.getElementById('submit').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim();
  if (!prompt) {
    alert('Please enter a prompt.');
    return;
  }
  const responseDiv = document.getElementById('response');
  //////////////////////////////////////////////////////
  console.log('Log: ', responseDiv)
  //////////////////////////////////////////////////////
  responseDiv.innerHTML = 'Waiting for response...';
  try {
    const res = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    //////////////////////////////////////////////////////
    console.log('Log: ', res)
    //////////////////////////////////////////////////////
    const data = await res.json();
    //////////////////////////////////////////////////////
    console.log('Log: ', data)
    //////////////////////////////////////////////////////
    if (data.error) {
      //////////////////////////////////////////////////////
      console.log('Log: ', data.error)
      //////////////////////////////////////////////////////
      responseDiv.innerHTML = `Error: ${data.error}`;
    } else {
      //////////////////////////////////////////////////////
      console.log('Log: ', data.response)
      //////////////////////////////////////////////////////
      responseDiv.innerHTML = `<strong>Response:</strong> ${data.response}`;
    }
  } catch (error) {
    //////////////////////////////////////////////////////
    console.log('Log: ', data.message)
    //////////////////////////////////////////////////////
    responseDiv.innerHTML = `Request failed: ${error.message}`;
  }
});
