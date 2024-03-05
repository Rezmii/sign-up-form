const passwordElement = document.querySelector("#password");
const confirmPasswordElement = document.querySelector("#confirm-password");
const buttonElement = document.querySelector(".sign-button");
const passwordDiv = document.querySelector(".password-div");

buttonElement.addEventListener("click", () => {
  let passValue = passwordElement.value;
  let confirmPassValue = confirmPasswordElement.value;
  checkPassConfirmation(passValue, confirmPassValue);
});

function checkPassConfirmation(pass, confirm) {
  if (pass === confirm) {
    console.log("zgadza sie");
  } else {
    passwordElement.classList.add("error");
    confirmPasswordElement.classList.add("error");
    addNoMatchError();
  }
}

function addNoMatchError() {
  const pElement = document.createElement("p");
  const pContent = document.createTextNode("*Passwords don't match.");
  pElement.appendChild(pContent);
  pElement.classList.add("pass-error");
  passwordDiv.appendChild(pElement);
}
