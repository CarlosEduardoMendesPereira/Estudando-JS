
// Função

// let n1 = 7;
// let n2 = 9; não precisa usar let
// Argumentos (30, 17) - Parâmetros (n1, n2)

// Funções que recebem parametros
// Funções que não recebem parametros
// Funções que retornam valores
// Funções que não retornam valores

// function somar(n1, n2 = 10) {
//         console.log("Numero 1 é " + n1);
//         console.log("Numero 2 é " + n2);
//         console.log("A soma deles é " + (n1 + n2));
// }
// somar(30);

// function somar(n1, n2 = 10) {
//     let soma = n1 + n2;
//     return soma;
// }

// let result = somar(30);
// console.log(result);

// function calc(n1, n2, op = "+") {
//     switch(op) {
//         case "+":
//             return n1 + n2;
//         case "-":
//             return n1 - n2;
//         case "*":
//             return n1 * n2;
//         case "/":
//             return n1 / n2;
//     }
//     return NaN;
// }

// console.log(calc(80, 6));
// console.log(calc(56, -6, "-"));
// console.log(calc(-56, 6, "*"));
// console.log(calc(20, 2, "somar"));

// Entrada - parametros
// Processamento - o código
// Saída - retorno

function desenhaTriangulo(altura) {
    for(let i = 1; i <= altura; i++) {
        let linha = "";
        for(let j = 0; j < altura-i; j++) {
            linha += " ";
        }
        for(let j = 0; j < i; j++){
            linha += "* ";
        }
        console.log(linha);
    } 
}

desenhaTriangulo(10);
