// Estruturas de Repetições

// console.log(1);
// console.log(2);
// ..
// console.log(10);

// if(4 > 6) {
    //faça isso
// }

// incrementa o valor de numero em uma unidade
// console.log("=========================");
// for(let numero = 0; numero < 10; numero++) {
//     console.log(numero);
// }

// // incrementa o valor de numero em duas unidade
// console.log("=========================");
// for(let numero = 0; numero < 10; numero = numero += 2) {
//     console.log(numero);
// }

// console.log("=========================");
// for(let numero = 10; numero >= 0; numero--) {
//     console.log(numero);
// }

// for(atribuição; condição; reatribuição) {
//      codigo de repetição
// }


// for(let numero = 0; numero < 100;) {
//     numero++;
//     console.log(numero);
// }


// let n = 0;
// while(n < 17) {
//     console.log("Soul + Porto");
//     n++;
// }

// for - Uma quantidade de repetições determinadas
// while - Uma quantidade de repetições indeterminadas
// i - iteração

let num = 73;
let ePrimo = true;
for(let i = 2; i < num; i++) {
    if(num % i == 0) {
        ePrimo = false;
    }
}

if(ePrimo) {
    console.log("é primo")
}
else {
    console.log("N é primo")
}