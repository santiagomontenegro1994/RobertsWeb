const btn = document.querySelector(".btn")
const menu = document.querySelector(".menu")

btn.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
})

const dark = document.querySelector(".dark")
const body = document.querySelector(".body")

dark.addEventListener("click", () => {
    body.classList.toggle("dark_mode")
})

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000);