/*
    Hamburger Menu for the nav
 */

const toggle = document.getElementsByClassName("toggle-btn");
const item = document.querySelectorAll(".item");

item.forEach(navItem => {
    function toggleMenu(){
        if(navItem.classList.contains("active")){
            navItem.classList.remove("active");
        }else{
            navItem.classList.add("active");
        }
    }

    document.querySelector(".toggle-btn").addEventListener("click", toggleMenu);
})

