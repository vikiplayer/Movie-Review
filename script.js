const icon = document.querySelector(".icon")
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

let container = document.querySelector('.movies_sec');
let slider = document.querySelector('.slider');
let slider1 = document.querySelector('.slider1');
let slider2 = document.querySelector('.slider2');
let card = document.querySelectorAll('.movies_details');
let card1 = document.querySelectorAll('.movies_details1');
let card2 = document.querySelectorAll('.movies_details2');
let cards = 4;
let cardWidth = 290;


function right(){
    if(+slider.style.marginLeft.slice(0,-2)!= -cardWidth * (card.length-cards))
        slider.style.marginLeft= ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px'
}
function left(){
    if(+slider.style.marginLeft.slice(0,-2)!=0)
        slider.style.marginLeft= ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px'
} 
function right1(){
    if(+slider1.style.marginLeft.slice(0,-2)!= -cardWidth * (card1.length-cards))
        slider1.style.marginLeft= ((+slider1.style.marginLeft.slice(0,-2))-cardWidth)+'px'
}
function left1(){
    if(+slider1.style.marginLeft.slice(0,-2)!=0)
        slider1.style.marginLeft= ((+slider1.style.marginLeft.slice(0,-2))+cardWidth)+'px'
} 
function right2(){
    if(+slider2.style.marginLeft.slice(0,-2)!= -cardWidth * (card2.length-cards))
        slider2.style.marginLeft= ((+slider2.style.marginLeft.slice(0,-2))-cardWidth)+'px'
}
function left2(){
    if(+slider2.style.marginLeft.slice(0,-2)!=0)
        slider2.style.marginLeft= ((+slider2.style.marginLeft.slice(0,-2))+cardWidth)+'px'
} 

let movies = document.querySelectorAll(".search-box ul li")
let input = document.getElementById("input");
let box = document.querySelector(".search-box");
function filterBox() {
    input.addEventListener('keydown', function() {
        box.style.display = "block";
    });

    input.addEventListener('keyup', function() {
        box.style.display = "none";
    });

    value.addEventListener("keyup", search)
}

const searchBtn = document.getElementById("input");
const searchBar = document.getElementById("input");

let searchQuery;

searchBar.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && searchBar.value != "") {
        location.href = 'pages/results/results.html';
        searchQuery = searchBar.value;
    }
    // get value entered and show on results.html
    // results for: "query"
})

console.log(searchQuery);

    //     
//     box.classList.toggle("active")
// }

// input.addEventListener('keyup',filterBox);
// console.log(input)