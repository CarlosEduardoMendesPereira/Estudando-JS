// const num1 = 3;
// const num2 = 6;
// const soma = num1 + num2;
// console.log(soma);

// let num = 16;
// let quadrado = 16**2;
// console.log(quadrado);

// ...

// Função ou Function - Rotina

// Funções Numericas (Number - Biblioteca)
// let result = Number.isNaN(NaN); // true / false
// console.log(result);

// result = Number.isFinite(Infinity); // true / false
// console.log(result);

// result = Number.NumberparseInt(12.4); // conversão do float para int (inteiro)
// console.log(result);

// result = Number.parseFloat(12); // conversão do int para float
// console.log(result);

// result = Number.isInteger(13.4); // inteiro (true / false)
// console.log(result)

// let numero = 22.539;
// console.log(numero.toFixed(2)); // numero de casas decimais
// console.log(numero.toFixed(1));

// console.log(numero.toPrecision(4));

// console.log(numero.toString());

// numero = numero.toString();
// console.log(numero);

// let num1 = 4;
// let num2 = 5;
// function multiplicar () {
//     console.log("O primeiro numero é " + num1);
//     console.log("O segundo numero é " + num2);
//     console.log("O produto final é " + (num1 * num2));
// }
// multiplicar();

// Funções de Texto

const texto = "Java Script";

console.log(texto.charAt(9)); // imprime o caractere da posição 9

console.log(texto.concat(" é legal")); // concatena JavaScript com textotexto

console.log(texto.charAt(texto.length-1)); // imprime o ultimo caractere

console.log(texto.trim()); // remove espaços do fim  e do inicio do texto

console.log(texto.replaceAll(" ", ""));

console.log(texto.includes("Java")); // considera maiuscula e minuscula

console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

let busca = "JaVa"
console.log(texto.toLowerCase().includes(busca.toLowerCase())); // não considera maiuscula e minuscula

console.log(texto.replace("J", "A").replace("S", "T").replace("H", "A",)); // funciona perfeitamente

console.log(texto.indexOf("Script"));

console.log(texto.substring(0, 5));

// Math - Biblioteca Matemática
console.log(Math.ceil(4.378)); // arredonda para cima
console.log(Math.floor(4.378)); // arredonda para baixo
console.log(Math.round(4.788)); // arredonda para o mais proximo
console.log(Math.sqrt(625)); // 
console.log(Math.abs(-8)); //
console.log(Math.random()); // gera numero aleatório [0, 1 ....[
console.log(Math.floor(Math.random() * 100 + 1)); // gera um numero aleatorio de 1 até 100