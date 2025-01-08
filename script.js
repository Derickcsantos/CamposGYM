// Script para ativar a API VLibras
new window.VLibras.Widget('https://vlibras.gov.br/app');

// Função para rolar até o topo da página
document.getElementById('scrollUpBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Abrir/Fechar o menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
