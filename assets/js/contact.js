document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('/netlify/functions/sendFormData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        const feedbackElement = document.getElementById('feedbackMessage');

        if (data.message === 'Message sent successfully!') {
            // alert('Your message has been sent successfully!');
            feedbackElement.textContent = 'तुमचा संदेश यशस्वीपणे पाठवला गेला!';
            feedbackElement.style.color = 'green';
            document.getElementById('contactForm').reset();
        } else {
            // alert('Failed to send your message.');
            feedbackElement.textContent = 'तुमचा संदेश पाठवण्यात अयशस्वी!';
            feedbackElement.style.color = 'red';
        }

        feedbackElement.style.display = 'block';
         // Hide the feedback message after 3 seconds
         setTimeout(() => {
            feedbackElement.style.display = 'none';
        }, 3000);

    })
    .catch(error => {
        // alert('Error sending your message.');
        console.error('Error sending message:', error);
        const feedbackElement = document.getElementById('feedbackMessage');
        feedbackElement.textContent = 'तुमचा संदेश पाठवताना त्रुटी.';
        feedbackElement.style.color = 'red';
        feedbackElement.style.display = 'block';
    });
});
