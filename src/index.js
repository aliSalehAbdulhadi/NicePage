const sideBarOverlay = document.querySelector(".side-bar");
const burger = document.querySelector(".nav__burger-menu");
const sideBar = document.querySelector(".side-bar__container");
const body = document.getElementsByTagName("body")[0];
const form = document.querySelector(".contact__form");
const nameInput = document.querySelector(".contact__form-input--name");
const emailInput = document.querySelector(".contact__form-input--email");
const messageInput = document.querySelector(".contact__form-textarea");
const formStatus = document.querySelector(".contact__form-status");
const formButton = document.querySelector(".contact__form-button");
const formButtonSubmitting = document.querySelector(
  ".contact__form-button--submitting",
);

const url = "https://mock-message-api.herokuapp.com/messagess";

burger.addEventListener("click", () => {
  sideBarOverlay.classList.add("active");
  sideBar.classList.add("slide-animation");
  sideBarOverlay.classList.remove("de-active");
  sideBar.classList.remove("slide-out-animation");
  body.classList.add("no-scroll");
});

sideBarOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("side-bar__container")) return;
  sideBarOverlay.classList.add("de-active");
  sideBar.classList.add("slide-out-animation");
  sideBarOverlay.classList.remove("active");
  sideBar.classList.remove("slide-animation");
  body.classList.remove("no-scroll");
});

const getName = () => {
  return nameInput.value;
};

const getEmail = () => {
  return emailInput.value;
};

const getMessage = () => {
  return messageInput.value;
};

const postMessage = async () => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: getEmail(),
        email: getName(),
        content: getMessage(),
      }),
    });
    if (res.ok) {
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      formStatus.textContent = "Message received!";
      setTimeout(() => {
        formStatus.textContent = "";
      }, 2000);
    } else {
      formStatus.style.color = "red";
      formStatus.textContent = "Request failed, please try again later.";
      setTimeout(() => {
        formStatus.textContent = "";
      }, 2000);
    }
  } catch (err) {
    return err;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formButton.classList.add("hidden");
  formButtonSubmitting.classList.remove("hidden");
  setTimeout(() => {
    formButton.classList.remove("hidden");
    formButtonSubmitting.classList.add("hidden");
    postMessage();
  }, 800);
});
