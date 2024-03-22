document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.nav-list a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Remove a classe 'active' de todos os links
            links.forEach(function(link) {
                link.parentElement.classList.remove('activeBt');
            });

            // Adiciona a classe 'active' ao link clicado
            this.parentElement.classList.add('activeBt');
        });
    });
});