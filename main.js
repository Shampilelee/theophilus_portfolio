
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menu_Btn_Raper = document.querySelector(".menu_btn");
const menu_Btn_Snap = document.querySelector(".menu_btn__burger");

let show_Menu = false;

const nav = document.querySelector(".nav");
const menu_Nav = document.querySelector(".menu_nav");

const nav_Item = document.querySelectorAll(".menu_nav__item");


menu_Btn_Raper.addEventListener("click", toggle_Menu);

function toggle_Menu() {
    
    if (!show_Menu) {
        menu_Btn_Snap.classList.add("open");

        nav.classList.add("open");
        menu_Nav.classList.add("open");

        nav_Item.forEach(item => item.classList.add("open"));

        show_Menu = true;
    } 
    else {
        menu_Btn_Snap.classList.remove("open");

        nav.classList.remove("open");
        menu_Nav.classList.remove("open");

        nav_Item.forEach(item => item.classList.remove("open"));

        show_Menu = false;
    }
}


