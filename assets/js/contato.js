
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
        alert("mensagens enviadas");
    });


});


document.addEventListener("DOMContentLoaded", function() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    const messagesList = document.getElementById("messagesList");

    messages.forEach(function(message) {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = message.name;

        const cardSubtitle = document.createElement("h6");
        cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
        cardSubtitle.textContent = message.email;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = message.message;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubtitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        messagesList.appendChild(card);
    });
});



document.getElementById("btnLimparMsn").addEventListener("click", function(){
    localStorage.removeItem("messages");
    alert("Todas as mensagens foram removidas.");
    window.location.reload();
});


document.addEventListener("DOMContentLoaded", function() {
    function updateMessageList() {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        const messagesList = document.getElementById("messagesList");
        messagesList.innerHTML = ""; // Limpa a lista de mensagens antes de atualizar

        messages.forEach(function(message) {
            const card = document.createElement("div");
            card.classList.add("card", "mb-3");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = message.name;

            const cardSubtitle = document.createElement("h6");
            cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
            cardSubtitle.textContent = message.email;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = message.message;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardBody);
            messagesList.appendChild(card);
        });
    }

    updateMessageList();

    window.addEventListener("storage", function(event) {
        if (event.key === "messages") {
            updateMessageList();
        }
    });
});
