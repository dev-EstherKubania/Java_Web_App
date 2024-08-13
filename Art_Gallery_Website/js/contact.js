// contact.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email address.');
            return;
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (message === '') {
            alert('Please enter your message.');
            return;
        }

        // If all validations pass, you can submit the form or perform other actions
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset(); // Clear the form
    });

    // Function to validate email address
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
