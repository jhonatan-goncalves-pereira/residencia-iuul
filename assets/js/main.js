document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('.nav-list a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            links.forEach(function (link) {
                link.parentElement.classList.remove('activeBt');
            });

            this.parentElement.classList.add('activeBt');
        });
    });
});

// No clique do menu móvel
document.querySelector('.mobile-menu').addEventListener('click', function () {
    // Adiciona ou remove a classe .active do elemento .nav-list
    document.querySelector('.nav-list').classList.toggle('active');
});


//cards com descrição das techs
// Selecionar todos os elementos de classe "intervalCardReveal"
const cards = document.querySelectorAll('.intervalCardReveal');
const descricao = document.querySelector('#skills-text p');

function trocarConteudo(event) {
    const card = event.target.closest('.intervalCardReveal');

    if (!card) return;
    cards.forEach(card => card.classList.remove('changeDescription'));
    card.classList.add('changeDescription');

    if (card.classList.contains('html')) {
        descricao.textContent = "HTML é a linguagem de marcação padrão para páginas da web. HTML significa HyperText Markup Language.";
    } else if (card.classList.contains('css')) {
        descricao.textContent = "CSS é a linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML.";
    } else if (card.classList.contains('js')) {
        descricao.textContent = "JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas em páginas da web.";
    } else if (card.classList.contains('bootstrap')) {
        descricao.textContent = "Bootstrap é um framework de código aberto para desenvolvimento rápido de projetos responsivos.";
    } else if (card.classList.contains('powerBi')) {
        descricao.textContent = "Power BI é uma suíte de análise de negócios da Microsoft que fornece insights para permitir decisões rápidas e informadas.";
    } else if (card.classList.contains('aws')) {
        descricao.textContent = "Amazon Web Services (AWS) é uma plataforma de serviços de computação em nuvem oferecida pela Amazon.";
    } else if (card.classList.contains('virtualBox')) {
        descricao.textContent = "VirtualBox é um software de virtualização de código aberto para x86.";
    } else if (card.classList.contains('wireShark')) {
        descricao.textContent = "Wireshark é um analisador de protocolo de software, ou sniffer, usado para análise e solução de problemas em redes de comunicação.";
    } else if (card.classList.contains('reac')) {
        descricao.textContent = "React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário.";
    } else if (card.classList.contains('angular')) {
        descricao.textContent = "Angular é uma plataforma e estrutura de aplicativos da web desenvolvida pela equipe do Google.";
    }
}

cards.forEach(card => {
    card.addEventListener('mouseenter', trocarConteudo);
});





// Função para carregar o conteúdo de um arquivo HTML e adicioná-lo a um elemento na página
function includeHTML(filePath, placeholderId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(placeholderId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", filePath, true);
    xhttp.send();
}





