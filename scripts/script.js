/*
    Hamburger menu
 */
const mainMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top ='0';
}

function close(){
    mainMenu.style.top = '-100%';

}

/*
    Typing animation
 */

var typed = new Typed(".prof-typing",{
    strings:["","Web Developer", "Student.", "Gutiar Player."],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
})