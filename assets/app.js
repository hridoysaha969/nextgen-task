const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const close = document.getElementById("close");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("show__menu");
});

close.addEventListener("click", () => {
  mobileMenu.classList.remove("show__menu");
});
