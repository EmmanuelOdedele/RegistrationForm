function myValidation() {
  let fullname = document.getElementById("fullname").value;
  if (fullname == "") {
    document.getElementById("fullnameval").innerHTML =
      "Your fullname is required";
    return false;
  }

  let username = document.getElementById("username").value;
  if (username == "") {
    document.getElementById("usernameval").innerHTML =
      "Your username is required";
    return false;
  }

  let email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("emailval").innerHTML = "Your email is required";
    return false;
  }

  let phone = document.getElementById("phone").value;
  if (phone == "") {
    document.getElementById("phoneval").innerHTML =
      "Your phone number is required";
    return false;
  }

  let password1 = document.getElementById("password1").value;
  if (password1 == "") {
    document.getElementById("password1val").innerHTML =
      "Your password is required";
    return false;
  }

  let password2 = document.getElementById("password2").value;
  if (password2 == "") {
    document.getElementById("password2val").innerHTML =
      "Please confirm your password";
    return false;
  }
  if (password2 !== password1) {
    document.getElementById("password2val").innerHTML = "Password incorrect";
    return false;
  }
}

function changeFullName() {
  let fullname = document.getElementById("fullname").value;
  if (fullname !== "") {
    document.getElementById("fullnameval").innerHTML = "";
  }
}

function changeUserName() {
  let username = document.getElementById("username").value;
  if (username !== "") {
    document.getElementById("usernameval").innerHTML = "";
  }
}

function changeEmail() {
  let email = document.getElementById("email").value;
  if (email !== "") {
    document.getElementById("emailval").innerHTML = "";
  }
}

function changePhone() {
  let phone = document.getElementById("phone").value;
  if (phone !== "") {
    document.getElementById("phoneval").innerHTML = "";
  }
}

function changePassword1() {
  let password1 = document.getElementById("password1").value;
  if (password1 !== "") {
    document.getElementById("password1val").innerHTML = "";
  }
}

function changePassword2() {
  let password2 = document.getElementById("password2").value;
  if (password2 !== "") {
    document.getElementById("password2val").innerHTML = "";
  }
}

function validatePhoneNumber() {
  let valPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

}