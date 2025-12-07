const form = document.getElementById("contact-form");
const errorMessages = document.getElementById("error-messages");
const output = document.getElementById("output");


form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop actual submission for now
    
    // clear prev errors
    errorMessages.textContent = "";
    output.textContent = ""; // Clear previous success messages
        
    // get values and validate ;
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    
    
    const emailValue = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        errorMessages.textContent = "Invalid email format, enter as x@x.x";
        return false;
    }

    const messageValue = message.value.trim();
    if (messageValue.length < 10) {
        errorMessages.textContent = "Message must be at least 10 characters.";
        return false;
    }

    // Show success message
    alert("Email submitted! Thank you for your message.");
    output.textContent = `Thank you, ${nameValue}! Your message has been received.`;
    
    // Clear form
    form.reset();
});
