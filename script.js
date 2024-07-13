icon = document.querySelector(".icon")
function expand(){
    menu= document.querySelector(".main")
    menu.classList.toggle("active")
}

function height(){
    nav= document.querySelector(".navigation")
    nav.classList.toggle("active")
}

icon.addEventListener('click',height);
icon.addEventListener('click',expand);