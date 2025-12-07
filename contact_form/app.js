const form = document.getElementById("contact-form");
const errorMessages = document.getElementById("error-messages");
const output = document.getElementById("output");


form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop actual submission for now
    
    // clear prev errors
    errorMessages.textContent = "";
        
    // get values and validate 
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    
    const nameValue = name.value.trim();
    if (nameValue.length < 2 || !/^[A-Za-z]+$/.test(nameValue)) {
        errorMessages.textContent = "Name must be at least 2 characters and contain only letters.";
        return false;
    }
    
    const emailValue = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        errorMessages.textContent = "Invalid email format, enter as x@x.x";
        return false;
    }

    alert("Email submitted! Thank you for your message.");
    formSubmitted();
});

