
//sticy navigation

let navMenu = document.getElementById('nav_menu');
window.addEventListener('scroll', () => {
    if (window.scrollY > 5){
        navMenu.classList.add('navhader');
    }else{
        navMenu.classList.remove('navhader');
    }
})