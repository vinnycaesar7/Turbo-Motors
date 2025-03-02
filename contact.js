const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submite', (e) => {

    e.preventDefault();

    // simulate form submission
    // (replace with actual submission logic)
    setTimeout(() => {
        successMessage.style.display ='block';
        form.reset();
    }, 2000);
})