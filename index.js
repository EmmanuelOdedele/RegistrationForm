function myValidation() {
  let fullname = document.getElementById("fullname").value;
  console.log(fullname)
  if (fullname == "") {
    document.getElementById("fullnameval").innerHTML =
      "Your fullname is required";
    return false;
  }
}
