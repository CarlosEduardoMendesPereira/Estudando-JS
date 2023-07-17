class Pessoa {
    nome;
    idade;
    email;
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Carlos";
pessoa1.idade = 21;
pessoa1.email = "carlos@gmail.com";
// pessoa1.cor; // é valido
console.log(pessoa1);

const pessoa2 = { // mesmo objeto pessoa, mas não foi construido por meio da classe Pessoa
    nome: "Gabriel", // chave: valor
    idade: 21,
    email: "Gabriel@gmail.com",
    foto: "https://bancodefotos.com/12345",
    enabled: true
};

// console.log(pessoa2);

// const vetor = ["Gabriel", 21, "gabriel@gmail.com"];
// console.log(vetor[0]);
// const objeto = { nome: "Gabriel", idade: 21, email: "gabriel@gmail.com" };
// console.log(objeto["nome"]); // totalmente válido. Acessa a propriedade "nome" do objeto

const pc = {
    ram: 16,
    disco: 1,
    processador: "i9 intel",
    fonte: "550w",
    placa: "Gigabyte",
};

const saldo = 800;

if(saldo > 4000) {
    pc.placaVideo = "RTX 3080";
}

// console.log(pc);

let n1 = 2;
let n2 = n1; // faz uma copia de n1 e passa para n2
n1 = 3; // não afeta o n2
console.log(n1); // 3
console.log(n2); // 2

// Forma incorreta de copiar um objeto
// let objeto1 = { nome: "Bruna", curso: "JavaScript" };
// let objeto2 = objeto1; // não é feito uma copia do objeto, e sim da referencia dele na memoria
// objeto1.nome = "Bruna Muller";
// console.log(objeto1);
// console.log(objeto2);

// Forma correta de copiar um objeto - Operador spread "..."
let objeto1 = { nome: "Bruna", curso: "JavaScript" };
let objeto2 = {...objeto1}; // copiar os elementos do objeto1 e "espelhar" no objeto2
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);
delete objeto1.nome; // remove a propriedade "nome" do objeto
console.log(objeto1);