const elements = {
  subscribeForm: document.getElementById("subscribe-form"),
  userEmail: document.getElementById("user-email"),
  invalidInputNotif: document.getElementById("invalid-input-notif"),
  subContainer: document.querySelector(".sub"),
  messageContainer: document.querySelector(".message"),
  dissmissBtn: document.getElementById("dismiss-btn"),
  confirmMsg: document.getElementById("confirm-msg"),
};

const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userInput = elements.userEmail;
let isInvalidInput = false;

function setInvalidInputState(isInvalid) {
  isInvalidInput = isInvalid;
  elements.userEmail.classList.toggle("invalid-input", isInvalid);
  elements.invalidInputNotif.classList.toggle("hide", !isInvalid);
}

function validateEmail(userInput) {
  if (validEmailRegex.test(userInput.value)) {
    return true;
  }
  return false;
}

function togglePage(showPage, hidePage) {
  showPage.classList.toggle("hide");
  hidePage.classList.toggle("hide");
  elements.messageContainer.classList.toggle("show");
}

elements.userEmail.addEventListener("input", () => {
  if (validateEmail(userInput)) {
    setInvalidInputState(false);
  } else {
    setInvalidInputState(true);
  }
});

elements.subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateEmail(userInput)) {
    togglePage(elements.messageContainer, elements.subContainer);
    setInvalidInputState(false);
    elements.confirmMsg.innerHTML = `A confirmation email has been sent to <b>${userInput.value}</b>.
            Please open it and click the button inside to confirm your
            subscription.`;
  } else {
    setInvalidInputState(true);
  }
});

elements.dissmissBtn.addEventListener("click", () => {
  togglePage(elements.subContainer, elements.messageContainer);
});
