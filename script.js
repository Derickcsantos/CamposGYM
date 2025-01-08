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

function mostrarFoto(element) {
    const imgSrc = element.querySelector('img').src; // Obtém a URL da imagem clicada
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = imgSrc; // Define a imagem no modal
    modal.style.display = 'flex'; // Exibe o modal
}

function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Esconde o modal quando clicado
}
