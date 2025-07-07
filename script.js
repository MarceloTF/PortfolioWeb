// Função para trocar de seção ao clicar no menu
function mostrar(secaoId) {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        secao.classList.remove('active');
    });
    document.getElementById(secaoId).classList.add('active');
}