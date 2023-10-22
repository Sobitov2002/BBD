
//sticy navigation

let navMenu = document.getElementById('nav_menu');
window.addEventListener('scroll', () => {
    if (window.scrollY > 5){
        navMenu.classList.add('navhader');
    }else{
        navMenu.classList.remove('navhader');
    }
})

let burger = document.getElementById('nav_burger');
let nanMenu = document.getElementById('menu')
let navNumber = true;
burger.addEventListener('click',() =>{
   
    if(navNumber === true){
        burger.classList.remove('fa-bars')
        burger.classList.add('fa-xmark')
        nanMenu.classList.add('block')
        navNumber = false;
}
    else
    if(navNumber === false){
        burger.classList.remove('fa-xmark')
        burger.classList.add('fa-bars')
        nanMenu.classList.remove('block')
        navNumber = true;

    }
})
//navigation burger 

function menuOn(){
    
}
 