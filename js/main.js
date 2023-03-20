var navIcon = document.querySelector("nav i");
var navMenu = document.querySelector(".menu");

navIcon.onclick = function () {
  closeMenu();
};
navMenu.onclick = function () {
  closeMenu();
};

function closeMenu() {
  navMenu.classList.toggle("show-menu");
}
