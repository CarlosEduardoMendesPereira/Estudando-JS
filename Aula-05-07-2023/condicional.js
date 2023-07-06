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

// let num1 = 10, num2 = 9, num3 = 40;
// if(num1 == num2 || num2 == num3 || num1 == num3) {
//     console.log("Os numeros não podem ser iguais");
// }
// else if(num1 > num2 && num1 > num3) {
//     if(num2 > num3) {
//         console.log(num1 + " > " + num2 + " > " + num3); //num1 > num2 > num3
//     }
//     else {
//         console.log(num1 + " > " + num3 + " > " + num2); //num1 > num3 > num2
//     }
// }
// else if(num2 > num1 && num2 > num3) {
//     if(num1 > num3) {
//         console.log(num2 + " > " + num1 + " > " + num3); // num2 > num1 > num3
//     }
//     else {
//         console.log(num2 + " > " + num3 + " > " + num1); // num2 > num3 > num1
    
//     }
// }
// else {
//     if(num1 > num2) {
//         console.log(num3 + " > " + num1 + " > " + num2); // num3 > num1 > num 2
//     }
//     else {
//         console.log(num3 + " > " + num2 + " > " + num1); // num3 > num2 > num1
//     }

// }

let mes = 5;
if(mes == 1){
    console.log("Janeiro");
}
else if (mes == 2){
    console.log("Fevereiro");
}
else if (mes == 3){
    console.log("Março");
}
else if (mes == 4){
    console.log("Abril");
}
else if (mes == 5){
    console.log("Maio");
}
else if (mes == 6){
    console.log("Junho");
}
else if (mes == 7){
    console.log("Julho");
}
else if (mes == 8){
    console.log("Agosto");
}
else if (mes == 9){
    console.log("Setembro");
}
else if (mes == 10){
    console.log("Outubro");
}
else if (mes == 11){
    console.log("Novembro");
}
else if (mes == 12){
    console.log("Dezembro");
}
else {
    console.log("Este mês não existe");
}

switch(mes) {
    case 1:
        console.log("Janeiro");
        break; // para a execução das partes adiantes
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Este mês não existe.");
}


