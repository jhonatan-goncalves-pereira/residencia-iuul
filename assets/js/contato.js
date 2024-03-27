
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const formData = {
            name: name,
            email: email,
            message: message
        };

        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(formData);
        localStorage.setItem("messages", JSON.stringify(messages));

        form.reset();
        
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    const messagesList = document.getElementById("messagesList");

    messages.forEach(function(message) {
        const listItem = document.createElement("li");
        listItem.textContent = `Nome: ${message.name}, Email: ${message.email}, Mensagem: ${message.message}`;
        messagesList.appendChild(listItem);
    });
});
