const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.getElementsByClassName("parrafito")
const pid = document.getElementById("pid")
const  input = document.querySelector("input")

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = "pato"
console.log(h1.getAttribute("pantalla"))