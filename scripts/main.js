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

// Contact form handling
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalBtnText = submitBtn.innerText; // Remembering the button text

    // 1. Block the button and show "Sending..."
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    // 2. Remove any previous error message
    const oldError = contactForm.querySelector(".error-message");
    if (oldError) {
      oldError.remove();
    }

    const data = new FormData(contactForm);

    fetch(contactForm.action, {
      method: contactForm.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // 3. Success: Show success message and hide the form
          contactForm.innerHTML = `
            <div class="success-message">
              <h2>Дякуємо!</h2>
              <p>Ми отримали ваше повідомлення.</p>
            </div>
          `;
        } else {
          // 4. Server error: Re-enable the button and show an error message
          throw new Error("Server error");
        }
      })
      .catch((error) => {
        // 5. Network error or other issues: Re-enable the button and show an error message
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;

        // Creating an error element
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("error-message");
        errorDiv.innerText =
          "Виникла помилка. Перевірте з'єднання та спробуйте ще раз.";

        // Appending the error message to the form
        contactForm.appendChild(errorDiv);
      });
  });
}
