  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop actual submission for now
    alert("Email submitted! Thank you for your message.");
  });
