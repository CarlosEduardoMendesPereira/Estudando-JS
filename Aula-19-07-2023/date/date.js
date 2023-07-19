// Date - Data é um objeto que facilita o uso de data com JavaScript
let data = new Date(); // criar um objeto com base no tempo do sistema
console.log(data.toLocaleDateString());
console.log(data.toLocaleTimeString());

let agora =Date.now(); // a data/hora atual em milisegundos
let dezMin = 1000 * 60 * 10;
let daquiAPouco = agora + dezMin;
console.log(new Date(agora));
console.log(new Date(daquiAPouco));

console.log(new Date(2021, 12-1, 7));

const btn = document.querySelector("#enviar");

btn.addEventListener("click", () => {
    const dataCampo = document.querySelector("#dataNasc");
    const valor = dataCampo.value;
    // [2023, 07, 19]
    const vetorData = valor.split("-").map(n => Number(n));
    const data = new Date(vetorData[0], vetorData[1]-1, vetorData[2]);
    window.alert(data);
});