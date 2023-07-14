const nums = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7];
console.log(nums);

nums.push(4); // adiciona um elemento ao final do vetor
console.log(nums);

nums.unshift(1); // adiciona um elemento no inicio do vetor
console.log(nums);

nums.pop(); // remove um elemento no final do vetor
console.log(nums);

nums.shift(); // remove um elemento no inicio do vetor
console.log(nums);

let juncao = nums.join("-"); // fazer a junção dos elementos do vetor
console.log(juncao);

let vetor2 = [5, 6, 7]; 
let vetor3 = nums.concat(vetor2); // gera um novo vetor concatenado, junta com o primeiro vetor lá de cima
console.log(vetor3);


const nomes = ["Eduardo", "Ana", "Domingos", "Beatriz", "Carlos"];
console.log(nomes.sort()); // ordena o vator na ordem alfabetica (modifica o vetor)

console.log(nums.reverse()); // gera um novo vetor e reverte a ordem dos elementos do vetor (modifica o vetor)

console.log(nums.includes(7)); // retorna um boolean - verifica se tem o numero dentro do vetor

// console.log(nums.fill(0)); // preenche todos os elementos com 0
// console.log(nums.fill(9, 5)); // .fill(numero, posição)
// console.log(nums.fill(7, 2, 4)); // preencher com 7 de 2 a 4-1

console.log(nums.indexOf(5));// retorna o indice do primeiro elemento do vetor - imprime a posição do numero dentro do vetor

console.log(nums);
console.log(nums.splice(6, 3)); // remove elementos do meio do vetor (modifica o vetor)


console.log(nums.slice(2, 5)); // recorta um vetor do indice 2 a 5-1 (não modifica)

console.log("---------------")
nums.forEach(num => console.log(num)); // intera sobre os elementos do vetor

// reduce - efetuar a redução dos valores do vetor em um valor acumulativo
console.log("------reduce--------")
console.log(nums.reduce((acumulador, num) => (acumulador - num)));

console.log("-----------------")
console.log(nums.map(num => num * 2)); // multiplica todos os valores por 2 e gera um novo vetor

console.log("-----------------")
console.log(nums.find(num => (num > 8))); // retorna o primeiro valor que corresponde a condição especificada

console.log("-----------------")
console.log(nums.filter(num => (num %2 == 0))); // retorna um vetor com elementos que corresponde a condição

const names = [
    "João Silva",
    "Maria Santos",
    "Pedro Almeida",
    "Ana Oliveira",
    "Carlos Sousa",
    "Mariana Costa",
    "José Pereira",
    "Camila Gomes",
    "Antônio Rodrigues",
    "Luiza Sousa",
    "Fernando Lima",
    "Amanda Barbosa",
    "Rafael Carvalho",
    "Isabela Castro",
    "Francisco Pereira",
    "Laura Rocha",
    "Ricardo Cardoso",
    "Letícia Ribeiro",
    "Daniel Santos",
    "Lúcia Oliveira",
    "Rodrigo Alves",
    "Patrícia Costa",
    "Gustavo Ferreira",
    "Sofia Sousa",
    "Marcelo Silva",
    "Beatriz Rocha",
    "André Castro",
    "Carolina Souza",
    "Gabriel Braga",
    "Natália Sousa"
];

console.log(names.find(nome => nome.includes("Rocha"))); // Laura Rocha
console.log(names.filter(nome => nome.includes("Sousa"))); // todos com Sousa
console.log(names.filter(nome => !nome.includes("Letícia"))); // todos menos Leticia


// String como Vetor
let nome = 'Prof. Gabriel Braga';
let idade = 21;
let mensagem = `Nomes: ${nome}\nIdade: ${idade}`; // interpolação
console.log(mensagem);

console.log(nome[6]); // perfeitamente válido - retorna "G" de Gabriel

console.log("\tA pessoa com nome \"Vitor\" está esperando você na recepção.");

// \n - quebra linha
// \t - da um tab
// \""