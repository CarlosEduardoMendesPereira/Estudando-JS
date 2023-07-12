
// function somar(n1, n2) { // Entrada
//     let soma = n1 + n2; // Processamento
//     return soma; // Saída
// }

// function dividir(num, den){
//     if(den == 0)
//         return; // Retorno vazio e valido
//     return (num / den);
// }

// const num = dividir(22, 0);
// console.log(num);


// callback - função que passado como parametro de outra função

// function requisicaoParaBanco(callbackSucess, callbackError) {
//     for(let i = 0; i < 1000000; i++) {  // requisição feita para o servidor (simulação)
//         if(i === -1000) { // aqui gerou erro
//             callbackError();
//         }
//     }
//     callbackSucess();
// }
// // o callbackError pode ser substituido por qualquer outro nome ou pode ser utilizado o mesmo nome

// function sucesso() {
//     console.log("Sucesso");
// }

// function erro() {
//     console.log("ERROR!!");
// }

// requisicaoParaBanco(sucesso, erro);


// Função Anônima

// setInterval(teste, 000);

// setTimeout(function() {
//     console.log("Hello, World");
// }, 2000);

// setTimeout(function() {
//     console.log("O resultado é: " + (5 + 5))
// },2000)

// setInterval(function(n1, n2) {
//     console.log("Olá, mundo com setInterval");
//     console.log(n1 + n2);
// }, 2000, 10, 5);

// let funANO = function() {
// }

// function fun Ano() {
// }

// Arrow Function - Funções de seta - Funções Anônimas
// setTimeout(function() {
//     console.log("SetTimeout com Função Anônima");
// },2000);

// Arrow Function
// setTimeout(() => {
//     console.log("SetTimeout com Função Arrow")
// },2000);

// function() {
// }

// () => {
// }

// parametros => escopo/instrução
// (resultado, requisicao) => {
//     console.log(resultado, requisicao);
//     return 0;
// }

// Testando a utilização das arrow functions
function teste(callback) {
    let valor = callback(130);
    console.log(valor);
}

// Primeira forma de executar "teste" (Função Expression)
function vezes2(numero) {
    return (numero * 2);
}
teste(vezes2);

// Segundo forma de executar "teste" (Função Anonima)
teste(function(numero) {
    return (numero * 2);
});

// Terceira forma de executar "teste" (Função Arrow) - Modo 1
teste((numero) => {
    return (numero * 2);
});

// Quarta forma de executar "teste" (Função Arrow) - Modo 2
teste(numero => (numero * 2)); // pode-se omitir o "return" e as {} quando há apenas uma instrução"

// Exemplos

// setTimeout(() => console.log("Hello"), 2000); // Código mais limpo

// setTimeout(() => { // Quando adicionar mais um console
//     console.log("Hello");
//     console.log("Olá");
// }, 2000);

// Recursividade - Chamada de uma função pela mesma função

function fatorial(numero) {
    if(numero == 1) {
        return 1;
    }
    return numero * fatorial(numero - 1);
}
console.log(fatorial(4));