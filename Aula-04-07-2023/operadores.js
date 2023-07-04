// Operadores Aritméticos - +, -, *, /, **, %

/* let result;

result = 4 + 5; // 9
console.log(result);

result = 9 * 3; // 27
console.log(result); 

result = ((3 + 7) * 12) / 6; // 20
console.log(result) */

// Operadores de Atribuição (=, +=, -=, *=, /=, **=, %=)
// result = result + 30;
/* result += 30;
console.log(result) // 50

result -= 45;
console.log(result) // 5

result *= 7;
console.log(result) // 35

result %= 9;
console.log(result) // 8

result /= 2;
console.log(result) // 4

result **= 2;
console.log(result) // 16 */

// Operadores Incremento e Decremento
/*
    a++ - Pós Incremento
    ++a - Pré Incremento
    a-- - Pós Decremento
    --a - Pré Decremento
*/

/*let a = 30;
console.log(a) // 30
// a += 1;
console.log(a++); // 30

console.log(++a); // 32

console.log(--a); // 31

console.log(a--); // 31

console.log(a); // 30 */

// Operadores Relacionais (true or false - boolean)
/*
    < Menor que
    > Maior que
    <= Menor ou igual
    >= Maior ou igual
    == Igual a 
    === Igual a e mesmo tipo
    != Diferente
*/

const n1 = 9;
const n2 = 11;
const n3 = 9;
const n4 = 13;
const n5 = "11";

result = n1 < n2;
console.log(result); // true

result = n1 > n2;
console.log(result); // false

result = n1 <= n2;
console.log(result); // true

result = n1 <= n3;
console.log(result); // true

result = n1 >= n3;
console.log(result); // true

result = n1 > n3;
console.log(result); // false

result = n3 == n4;
console.log(result); // false

result = n1 == n3;
console.log(result); // true

result = n1 != n3;
console.log(result); // false

result = n1 != n4;
console.log(result); // true

result = n2 === n5;
console.log(result); // false

result = "Gabriel Braga" == "Gabriel Jesus";
console.log(result); // false

result = 3.14 == 3.14;
console.log(result);

