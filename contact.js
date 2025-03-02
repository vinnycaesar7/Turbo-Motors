document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission behavior
    document.getElementById("success-message").style.display = "block"; // Show success message
    this.reset(); // Optional: Clears the form fields after submission
});
