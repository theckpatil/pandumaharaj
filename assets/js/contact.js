document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('api/sendFormData', {
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
            feedbackElement.textContent = 'Your message has been sent successfully!';
            feedbackElement.style.color = 'green';
            document.getElementById('contactForm').reset();
        } else {
            // alert('Failed to send your message.');
            feedbackElement.textContent = 'Failed to send your message.';
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
        feedbackElement.textContent = 'Error sending your message.';
        feedbackElement.style.color = 'red';
        feedbackElement.style.display = 'block';
    });
});
