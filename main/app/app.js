
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
let menunav = document.getElementsByClassName('.nav_list');
let navNumber = true;
burger.addEventListener('click',() =>{
   
    if(navNumber === true){
        burger.classList.remove('fa-bars')
        burger.classList.add('fa-xmark')
        
        navNumber = false;
}
    else
    if(navNumber === false){
        burger.classList.remove('fa-xmark')
        burger.classList.add('fa-bars')
        menunav.classList.add('menu')
        navNumber = true;

    }
})