const btns = document.querySelectorAll(".pressable");
const btnAC = document.querySelector("#ac");
const btncalc = document.querySelector("#calc");
const visor = document.querySelector("#visor");

for(let btn of btns) {
    btn.addEventListener("click", (evento) => {
        const num = evento.target.innerText;
        visor.value += num;
    });
}

btnAC.addEventListener("click", () => {
    visor.value = "";
});

btncalc.addEventListener("click", () => {
    let expressao = visor.value.replaceAll(",", ".");
    let resultado = eval(expressao).toString().replaceAll(",", ".");
    visor.value = resultado
})