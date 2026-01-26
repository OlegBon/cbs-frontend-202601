const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
  menuList.classList.toggle("open");
  burger.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menuList.contains(event.target);
  const isClickOnBurger = burger.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnBurger &&
    menuList.classList.contains("open")
  ) {
    menuList.classList.remove("open");
    burger.classList.remove("active");
  }
});
