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


