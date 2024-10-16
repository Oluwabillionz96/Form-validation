// variables

const button = document.querySelector("button");

const inputs = document.getElementsByTagName("input");

const viewPassword = document.getElementById("see");

const hidePassword = document.getElementById("hide");

const errorMessage = document.querySelectorAll(".error-message");

const errorIcons = document.querySelectorAll(".error-icon");

const form = document.querySelector(".form-container");

const formSubmission = () => {
  form.style.display = "grid";
  form.style.placeItems = "center";
};

function error(num) {
  errorMessage[num].style.display = "block";
  errorIcons[num].style.display = "inline";
}

button.addEventListener("click", function () {
  if (
    inputs[2].value.includes("@") === false ||
    inputs[2].value.includes(".com") === false
  ) {
    error(2);
    inputs[2].addEventListener("keypress", function () {
      errorMessage[2].style.display = "none";
      errorIcons[2].style.display = "none";
      inputs[2].style.borderColor = "rgb(200,200,200)";
      inputs[2].style.outline = "none";
    });
  }
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      error(i);
      inputs[i].style.borderColor = "hsl(0,100%,74%)";
      inputs[i].style.outline = "none";
      inputs[i].addEventListener("keypress", function () {
        errorMessage[i].style.display = "none";
        errorIcons[i].style.display = "none";
        inputs[i].style.borderColor = "rgb(200,200,200)";
        inputs[i].style.outline = "none";
      });
    }
  }
});

viewPassword.addEventListener("click", function () {
  inputs[3].setAttribute("type", "text");
  viewPassword.style.display = "none";
  hidePassword.style.display = "inline";
});

hidePassword.addEventListener("click", function () {
  inputs[3].setAttribute("type", "password");
  viewPassword.style.display = "inline";
  hidePassword.style.display = "none";
});
