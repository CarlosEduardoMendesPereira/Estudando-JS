const imagens = [
    "https://images.unsplash.com/photo-1607969391576-48f9021ded30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1635278205315-0c4623df2714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1597019558926-3eef445fdf60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1575321539738-12cdc5ee584e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
];

// let imagem = document.querySelector("#galeria");
// imagem.src = imagens[2];

const imagem = document.querySelector("#galeria");
let indiceAtual = 1;

function galeria() {
    imagem.src = imagens[indiceAtual]; // acessando e atribuindo a imagem 
    if(indiceAtual == imagens.length-1) {
        indiceAtual = 0;
    }
    else {
        indiceAtual++;
    }
}

setInterval(galeria, 2000);
