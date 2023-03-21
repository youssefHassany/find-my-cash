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

var dropMenu = document.querySelector(".drop-menu");
var addBtn = document.querySelector(".add-btn");
var closeMenuBtn = document.querySelector(".close-drop-menu");

addBtn.onclick = function () {
  showHideDropMenu();
};
closeMenuBtn.onclick = function () {
  showHideDropMenu();
};

function showHideDropMenu() {
  dropMenu.classList.toggle("show-drop-menu");
}
