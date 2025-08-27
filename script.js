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

elements.subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = elements.userEmail;
  if (validateEmail(userInput)) {
    togglePage(elements.messageContainer ,elements.subContainer)

    elements.confirmMsg.innerHTML = `A confirmation email has been sent to <b>${userInput.value}</b>.
            Please open it and click the button inside to confirm your
            subscription.`;
    elements.invalidInputNotif.classList.add("hide");
    userInput.classList.remove("invalid-input");
  } else {
    elements.invalidInputNotif.classList.remove("hide");
    userInput.classList.add("invalid-input");
  }
});

elements.dissmissBtn.addEventListener("click", () => {
  togglePage(elements.subContainer, elements.messageContainer)
  elements.userEmail.value = "";
  elements.confirmMsg.innerHTML = "";
});
