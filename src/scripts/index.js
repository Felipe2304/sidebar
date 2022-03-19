const $menu = document.querySelector(".menu");
const $sidebar = document.querySelector(".sidebar");
const $boxTitle = document.querySelector(".box-title");

$menu.addEventListener("click", () => {
  $sidebar.classList.toggle("active");
  $boxTitle.classList.toggle("active");
});
