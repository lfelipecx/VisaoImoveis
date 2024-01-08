const btn = document.getElementById("button")
const menu = document.getElementById('menu')

btn.addEventListener("click", () => {
    // alert("abrir menu")
    menu.classList.toggle("hidden")
})