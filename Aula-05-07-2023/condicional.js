// Estruturas Condicionais
// Condição - Calculo Lógico
// if - se

// const altura = 1.59; // Se o valor for menor
// if(altura >= 1.60) { // ele vai dar false e
//     console.log("Pode entrar no brinquedo!"); // a instrução é ignorada
// }
// else {
//     console.log("Não entrou no brinquedo"); // a instrução é executada
// }

// let nivelingles = 1; // 1, 2, 3, 4, 5
// if(nivelingles == 1){
//     console.log("Nivel Iniciante");
// }
// else if(nivelingles == 2){
//     console.log("Nivel basico");
// }
// else if(nivelingles == 3){
//     console.log("Nivel intermediario");
// }
// else if(nivelingles == 4){
//     console.log("Nivel Avançado");
// }
// else if(nivelingles == 5){
//     console.log("Fluente");
// }
// else{
//     console.log("Nivel de ingles desconhecido");
// }

// let saldo = 350;
// if(saldo > 1000){
//     console.log("Comprar uma Bolsa");
// }
// else if(saldo > 200){
//     console.log("Comprar um tenis");
// }
// else if(saldo > 100){
//     console.log("Comprar um livro");
// }

// let opcao = "Ver";
// if(opcao == "Arquivo"){
//     console.log("Novo, Abrir, Configurações");
// }
// else if(opcao == "Editar"){
//     console.log("Desfazer, Refazer, Copiar");
// }
// else if(opcao == "Ver"){
//     console.log("Buscar, Aparência, Explorar")
// }

// let semaforo = "amarelo";
// if(semaforo == "verde"){
//     console.log("Pode passar");
// }
// else if(semaforo == "vermelho"){
//     console.log("Pare");
// }
// else if(semaforo == "amarelo"){
//     console.log("Atenção!")
// }

//Escopo - Bloco de Código
// let conseguiucomprar = false; // flag
// let saldo = 250;
// if(saldo > 200){
//     console.log("Fez a compra");
//     conseguiucomprar = true;
// }
// else {
//     console.log("Sem grana suficiente");
//     conseguiucomprar = false;
// }
// if(conseguiucomprar){
//     console.log("Conseguiu fazer a compra");
// }

let num1 = 10, num2 = 9, num3 = 40;
if(num1 == num2 || num2 == num3 || num1 == num3) {
    console.log("Os numeros não podem ser iguais");
}
else if(num1 > num2 && num1 > num3) {
    if(num2 > num3) {
        console.log(num1 + " > " + num2 + " > " + num3); //num1 > num2 > num3
    }
    else {
        console.log(num1 + " > " + num3 + " > " + num2); //num1 > num3 > num2
    }
}
else if(num2 > num1 && num2 > num3) {
    if(num1 > num3) {
        console.log(num2 + " > " + num1 + " > " + num3); // num2 > num1 > num3
    }
    else {
        console.log(num2 + " > " + num3 + " > " + num1); // num2 > num3 > num1
    
    }
}
else {
    if(num1 > num2) {
        console.log(num3 + " > " + num1 + " > " + num2); // num3 > num1 > num 2
    }
    else {
        console.log(num3 + " > " + num2 + " > " + num1); // num3 > num2 > num1
    }

}


