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

// Contact form reset on page reload
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      contactForm.reset();
    }
  });

  contactForm.reset();
}
