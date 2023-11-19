
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
 
console.log("salom");


//bot token
var telegram_bot_id = "6795492775:AAEL0eOfurszRxvI4zNQ7sqFITNeOKWs_gc"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 5812196124; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};