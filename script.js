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

elements.subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = elements.userEmail.value;
  if (validEmailRegex.test(userInput)) {
    elements.subContainer.classList.add("hide");
    elements.messageContainer.classList.remove("hide");
    elements.messageContainer.classList.add("show")
    elements.confirmMsg.innerHTML = `A confirmation email has been sent to <b>${userInput}</b>.
            Please open it and click the button inside to confirm your
            subscription.`;
    elements.invalidInputNotif.classList.add("hide");
    elements.userEmail.classList.remove("invalid-input");
  } else {
    elements.invalidInputNotif.classList.remove("hide");
    elements.userEmail.classList.add("invalid-input");
  }
});

elements.dissmissBtn.addEventListener("click", () => {
  elements.subContainer.classList.remove("hide");
  elements.messageContainer.classList.add("hide");
  elements.messageContainer.classList.remove("show")
  elements.userEmail.value = "";
  elements.confirmMsg.innerHTML = "";
});
