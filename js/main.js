//для бургера в главном меню

const burger = document.querySelector(".menu-burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("show");
    burger.classList.toggle("open");
});