const form = document.querySelector("#form"); 
const submiittedEmail = document.querySelector("#submitted-email");
const box = document.querySelector("#box"); 
const box_2 = document.querySelector("#box-2"); 
const dismiss = document.querySelector("#dismiss"); 

function updateSuccessMessage(email) {
  // update the strong tag with the email you inputed
  submiittedEmail.textContent = email;
}

function switchSections() {
  box.classList.toggle("hide")
  box_2.classList.toggle("hide")
}

function isValidEnty(str) {
  //validate email
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return reg.test(str);
}

function showErrors() {
  const error = document.querySelector(".error"); 
  const input = document.querySelector("#email"); 
  error.classList.remove("hidden");
  input.classList.add("error");
}

form.addEventListener("submit",(e) => {
  e.preventDefault();
  const email = form.querySelector("#email");
  const valid = isValidEnty(email.value);
  if(!valid) {
    return showErrors();
  }
  if(valid) {
    updateSuccessMessage(email.value);
    switchSections();
  }
}); 

dismiss.addEventListener("click", () => {
  switchSections();
  updateSuccessMessage("");
});