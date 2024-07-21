const burgerMenuToggler = document.querySelector(".burger-menu-toggler");
const navItems = document.querySelector(".nav-items");

burgerMenuToggler.addEventListener("click", function () {
  navItems.classList.toggle("active");
  console.log("burger-menu rendered");
});