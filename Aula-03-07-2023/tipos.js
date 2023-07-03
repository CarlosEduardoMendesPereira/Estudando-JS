// Tipagem Estatica - Definição de um tipo a cada variavel (Java, C, C++, TypeScript)
// Tipagem Dinamica - O tipo da variavel é definido de acordo com seu valor (JavaScript, Python)

// typeof - Operador que retorna o tipo da variavel

let variavel = 22;
console.log(typeof variavel); // number

variavel = 78.98;
console.log(typeof variavel); // number

variavel = "Carlos Eduardo";
console.log( typeof variavel); // string

variavel = true;
console.log(typeof variavel); // boolean

variavel = { nome: "Gabriel", idade: 21 }; // object
console.log(typeof variavel);

variavel = [1, 2, 3, 4, 5]; // object
console.log(typeof variavel);

variavel = function() {return 1}; // function
console.log(typeof variavel);

variavel = undefined; // indefinido
console.log(variavel); // undefine

variavel = null; // nulo
console.log(variavel); // null

variavel = NaN; // Not a number
console.log(variavel); // NaN


