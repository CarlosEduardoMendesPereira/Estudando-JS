// Evento - Ação (Clique, Teclar, Movimentar o cursor)
// Click - Clique do mouse
// dbl Clique - Duplo clique do mouse
// keydown - Apertar o botão
// keyup - Soltar o botão
// mouseover - Mover o ponteiro do mouse sobre o elemento
// mouseout - Mover o ponteiro do mouse para fora do elemento
// submit - Submeter os dados de um formulário
// change - Alterar o valor de um campo de formulário
// focus - Evento acionado quando o foco está sobre o elemento

let quadrado = document.querySelector("#quadrado");
console.log(quadrado);

quadrado.onclick = () => { // Primeira formar de adicionar um "ouvidor de evento"
    quadrado.style.borderRadius = "100px";
    quadrado.style.backgroundColor = "#003049";
    quadrado.style.transform = "translateY(200px)"
}

quadrado.ondblclick = () => {
    quadrado.style.borderRadius = "0px";
    quadrado.style.transform = "translateY(0px)"
    quadrado.style.backgroundColor = "red";
}

function changeColorSquare() { // Está função está sendo chamada no HTML
    quadrado.style.backgroundColor = "purple";
}

quadrado.addEventListener("mouseout", () => { // terceira forma de adicionar um "ouvirdor de evento"
    quadrado.style.backgroundColor = "blue";
});