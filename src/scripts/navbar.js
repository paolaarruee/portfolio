document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".hamburguer-menu");
  const navigationMenu = document.getElementById("navigationMenu");

  menuButton.addEventListener("click", function () {
    navigationMenu.classList.toggle("active");
  });
});
