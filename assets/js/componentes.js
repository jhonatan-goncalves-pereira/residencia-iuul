function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o componente:', error));
}

loadComponent('s-menu', '/assets/content/menu.html');
loadComponent('s-home', '/assets/content/home.html');
loadComponent('s-about', '/assets/content/about.html');
loadComponent('s-video', '/assets/content/video.html');
loadComponent('s-experience', '/assets/content/experience.html');
loadComponent('s-skills', '/assets/content/skills.html');
loadComponent('s-projects', '/assets/content/projects.html');
loadComponent('s-contato', '/assets/content/contato.html');
loadComponent('s-footer', '/assets/content/footer.html');