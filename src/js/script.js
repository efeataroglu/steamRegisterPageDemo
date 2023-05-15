const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control error is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control valid is-valid";
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    success(input);
  } else {
    error(input, "E-Mail Address is Incorrect.");
  }
}

function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} required field.`);
    } else {
      success(input);
    }
  });
}

function checkLenght(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} must be at least ${min} character.`);
  } else if (input.value.length > max) {
    error(input, `${input.id} must be a maximum of ${max} character.`);
  } else {
    success(input);
  }
}

function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    error(input2, "passwords do not match.");
  }
}

function checkPhone(input) {
  let exp = /^\d{10}$/;
  if (!exp.test(input.value))
    error(input, "The phone must have 10 characters.");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, repassword, phone]);
  checkEmail(email);
  checkLenght(username, 7, 15);
  checkLenght(password, 7, 12);
  checkPasswords(password, repassword);
  checkPhone(phone);
});
