// Script para ativar a API VLibras
new window.VLibras.Widget('https://vlibras.gov.br/app');

// Função para rolar até o topo da página
document.getElementById('scrollUpBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li a');

// Abre e fecha o menu quando o ícone é clicado
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu quando qualquer item de menu é clicado
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Fecha o menu quando clicar fora do menu
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
    }
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

window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.custom-scrollbar');

    // Obtém a altura total da página e a posição do scroll
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;

    // Calcula a largura da barra de progresso baseada na rolagem
    const progress = (scrollPosition / docHeight) * 100;

    // Atualiza a largura da barra de progresso
    scrollIndicator.style.width = `${progress}%`;
});