document.getElementById('submit').addEventListener('click', async () => {
  console.log('Topline event listener');
  
  const prompt = document.getElementById('prompt').value.trim();
  console.log('The prompt response is: ', prompt)

  if (!prompt) {
    alert('Please enter a prompt.');
    return;
  }
  const responseDiv = document.getElementById('response');
  console.log('The responseDiv response is: ', responseDiv)
  responseDiv.innerHTML = 'Waiting for response...';
  try {
    const res = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    console.log('The res response is: ', res)
    const data = await res.json();
    console.log('The data response is: ', data)
    if (data.error) {
      responseDiv.innerHTML = `Error: ${data.error}`;
      console.log('The data response is: ', data)
    } else {
      responseDiv.innerHTML = `<strong>Response:</strong> ${data.response}`;
      console.log('The data response is: ', data)
    }
  } catch (error) {
    responseDiv.innerHTML = `Request failed: ${error.message}`;
  }
});
