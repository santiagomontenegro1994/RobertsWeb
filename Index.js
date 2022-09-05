var btn = document.querySelector(".btn")
var menu = document.querySelector(".menu")

btn.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
});

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 2500);