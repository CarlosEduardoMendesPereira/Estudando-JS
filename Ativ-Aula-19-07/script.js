const imagens = [
    "./imagens/verde.png",
    "./imagens/amarelo.png",
    "./imagens/vermelho.png"
];

const imagem = document.querySelector("#semaforo");
let indiceAtual = 1;

function semaforo() {
    imagem.src = imagens[indiceAtual];
    if(indiceAtual == imagens.length-1) {
        indiceAtual = 0;
    }
    else {
        indiceAtual++;
    }
}

setInterval(semaforo, 2000);

