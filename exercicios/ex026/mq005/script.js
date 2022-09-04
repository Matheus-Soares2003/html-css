burguer = document.querySelector("span#burguer")
menu = document.querySelector("#menu")

function mostrarMenu(){
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}