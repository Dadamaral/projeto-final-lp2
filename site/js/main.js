const cristais = document.querySelectorAll('.cristal');
const dots = document.querySelectorAll('.dot');
let indiceAtual = 1; // Começa no segundo cristal (HOME)

function atualizarCarrossel() {
    cristais.forEach((cristal, index) => {
        cristal.classList.remove('ativo');
        dots[index].classList.remove('ativo');
        
        // Mostra apenas o anterior, o atual e o próximo
        if (index === indiceAtual) {
            cristal.style.display = 'flex';
            cristal.style.order = '2'; // Fica no meio
            cristal.classList.add('ativo');
            dots[index].classList.add('ativo');
        } else if (index === (indiceAtual - 1 + cristais.length) % cristais.length) {
            cristal.style.display = 'flex';
            cristal.style.order = '1'; // Fica na esquerda
        } else if (index === (indiceAtual + 1) % cristais.length) {
            cristal.style.display = 'flex';
            cristal.style.order = '3'; // Fica na direita
        } else {
            cristal.style.display = 'none'; // Esconde os outros
        }
    });
}

document.getElementById('btn-proximo').addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % cristais.length;
    atualizarCarrossel();
});

document.getElementById('btn-anterior').addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + cristais.length) % cristais.length;
    atualizarCarrossel();
});

// Inicia na posição correta
atualizarCarrossel();