let text = document.querySelector(".header-redponsive")
let button = document.querySelector(".header-redponsive-close")

button.addEventListener("click" , function(){
    text.style.display = "none"
})

let btn = document.querySelector(".header-hamburger")
btn.addEventListener("click" , function(){
    text.style.display = "block"
})