const btnIniciar = document.getElementById('btn-conhecimento');
const containerAnimacao = document.getElementById('container-animacao');

const p1 = document.getElementById('texto-digitado-1');
const p2 = document.getElementById('texto-digitado-2');
const btnContinuar = document.getElementById('btn-continuar');
const btnFinal = document.getElementById('btn-final');

const deus1 = document.getElementById('deus-1'); // Gaia
const deus2 = document.getElementById('deus-2'); // Tártaro
const deus3 = document.getElementById('deus-3'); // Eros
const deus4 = document.getElementById('deus-4'); // Érebo

const texto1 = "A mitologia grega conta que, no princípio, tudo era dominado pelo Caos, um vazio infinito e desordenado. Dele surgiram as primeiras divindades, como Gaia, a personificação da Terra, Tártaro, o abismo profundo, e Eros, a força da união e do amor. Assim, aos poucos, o universo começou a ganhar forma, dando origem ao céu, aos mares e aos primeiros seres divinos.";

const texto2 = "Da união entre Gaia e Urano, o deus do Céu, nasceram os Titãs, os Ciclopes e outras criaturas poderosas. Entretanto, conflitos entre as divindades marcaram o início de uma longa disputa pelo poder, dando origem a novas gerações de deuses e acontecimentos que moldariam o mundo mitológico grego.";

let i = 0;
function digitarParte1() {
    if (i < texto1.length) {
        p1.innerHTML += texto1.charAt(i);
        i++;
        
        // Faz cada deus surgir na hora exata em que é citado no texto!
        if (i === 120 && deus1) deus1.classList.add('visivel'); // Quando cita Gaia
        if (i === 165 && deus2) deus2.classList.add('visivel'); // Quando cita Tártaro
        if (i === 200 && deus3) deus3.classList.add('visivel'); // Quando cita Eros

        setTimeout(digitarParte1, 25);
    } else {
        // Deixa "Caos" em negrito como na referência e exibe a setinha
        p1.innerHTML = p1.innerHTML.replace("Caos", "<strong>Caos</strong>");
        if (deus4) deus4.classList.add('visivel'); // Revela o 4º deus no fim do 1º bloco
        btnContinuar.classList.remove('oculto');
    }
}

let j = 0;
function digitarParte2() {
    if (j < texto2.length) {
        p2.innerHTML += texto2.charAt(j);
        j++;
        setTimeout(digitarParte2, 25);
    } else {
        // Ao terminar o segundo parágrafo, exibe o botão "saber completo"
        btnFinal.classList.remove('oculto');
    }
}

btnIniciar.addEventListener('click', () => {
    btnIniciar.style.display = 'none';
    containerAnimacao.classList.remove('oculto');
    digitarParte1();
});

btnContinuar.addEventListener('click', () => {
    btnContinuar.style.display = 'none';
    digitarParte2();
});