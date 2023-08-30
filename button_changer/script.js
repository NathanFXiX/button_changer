const input = document.querySelector(".user_input")
const button = document.querySelector(".button")
const text = document.querySelector("#texto")

function listarInput() {
    document.getElementById("texto").innerHTML=input.value
}

button.addEventListener('click', listarInput)