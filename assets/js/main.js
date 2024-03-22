document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.nav-list a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            links.forEach(function(link) {
                link.parentElement.classList.remove('activeBt');
            });

            this.parentElement.classList.add('activeBt');
        });
    });
});

// No clique do menu móvel
document.querySelector('.mobile-menu').addEventListener('click', function() {
    // Adiciona ou remove a classe .active do elemento .nav-list
    document.querySelector('.nav-list').classList.toggle('active');
});



