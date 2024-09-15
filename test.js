fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "host": "https://pandumaharaj.vercel.app",
      "key": "83b07caa3c2648c9b47740839e5c62ca",
      "keyLocation": "https://pandumaharaj.vercel.app/83b07caa3c2648c9b47740839e5c62ca.txt",
      "urlList": [
        "https://pandumaharaj.vercel.app/#about",
        "https://pandumaharaj.vercel.app/#samadhi_info",
        "https://pandumaharaj.vercel.app/#gallary",
        "https://pandumaharaj.vercel.app/#contact"
      ]
    })
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));
  