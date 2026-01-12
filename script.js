const button = document.getElementById("menu-drop-down");
const logoMenu = document.getElementById("down");
const menuContent = document.getElementById("submenu");

button.addEventListener('click' , () => {
    menuContent.classList.toggle("active");
    logoMenu.classList.toggle("active");
});


const body = document.getElementById("body");
const buttonChange = document.getElementById("change-mode");
const logoTheme = document.querySelector(".fa-sun");

buttonChange.addEventListener('click' , () => {
    body.classList.toggle("dark");
    logoTheme.classList.toggle("fa-moon");
    logoTheme.classList.toggle("active");
    logoTheme.classList.toggle("fa-sun");
});

const buttonNav = document.getElementById("button-nav");
const kontenNav = document.getElementById("konten-mobile");

buttonNav.addEventListener('click' , () => {
    buttonNav.classList.toggle("active");
  kontenNav.classList.toggle("active");
});

const modeMobile = document.getElementById("button-mode");
const modeMobileLogo = document.getElementById("mobile-logo-mode");

modeMobile.addEventListener("click" , () => {
    body.classList.toggle("dark");
    modeMobileLogo.classList.toggle("fa-moon");
    modeMobileLogo.classList.toggle("active");
    modeMobileLogo.classList.toggle("fa-sun");
});