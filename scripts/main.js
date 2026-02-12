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
  contactForm.addEventListener("submit", function (event) {
    // 1. Stop the default form submission behavior
    event.preventDefault();

    // 2. Collect form data
    const data = new FormData(contactForm);

    // 3. Send the form data using Fetch API
    fetch(contactForm.action, {
      method: contactForm.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // 4. Show success message and reset form
          contactForm.innerHTML = `
          <div class="success-message">
            <h2>Дякуємо!</h2>
            <p>Ми отримали ваше повідомлення.</p>
          </div>
        `;
        } else {
          // 5. Show error message
          contactForm.innerHTML = `
          <div class="error-message">
            <h2>Помилка!</h2>
            <p>Виникла помилка при відправці повідомлення.</p>
          </div>
        `;
        }
      })
      .catch((error) => {
        // 6. Show error message on network failure
        contactForm.innerHTML = `
        <div class="error-message">
          <h2>Помилка!</h2>
          <p>Виникла помилка при відправці повідомлення.</p>
        </div>
      `;
      });
  });
}
