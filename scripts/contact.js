document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const contactInput = document.getElementById('contact-input');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            return;
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!contactInput.value.trim()) {
            alert('Please enter a message.');
            return;
        }

        
        alert('Thank you for your message!');

        nameInput.value = '';
        emailInput.value = '';
        contactInput.value = '';
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
