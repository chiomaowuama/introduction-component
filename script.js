function submits(event) {
  event.preventDefault();
  let Fname = document.getElementById("firstname").value;
  let errorfirst = document.getElementById("errorfirst");
  let Sname = document.getElementById("secondname").value;
  let errorsec = document.getElementById("errorsec");
  let Emailad = document.getElementById("emails").value;
  let Emailerror = document.getElementById("Emailerror");
  let Passwords = document.getElementById("password").value;
  let PasswordsError = document.getElementById("passworderror");
  let result = [];
  let isValid = true;

  const regex = /^[A-Za-z]+$/;
  //   firstname verification
  if (Fname === "" || Fname == null) {
    errorfirst.innerHTML = "please input firstname";
    isValid = false;
  } else {
    if (!regex.test(Fname)) {
      errorfirst.innerHTML = "please Alphabets only and no space";
      isValid = false;
    } else {
      errorfirst.innerHTML = "";
      result.firstname = Fname;
    }
  }
  // surnname verification
  if (Sname === "" || Sname == null) {
    errorsec.innerHTML = "please input Surnname";
    isValid = false;
  } else {
    if (!regex.test(Sname)) {
      errorsec.innerHTML = "please Alphabets only";
      isValid = false;
    } else {
      errorsec.innerHTML = "";
      result.Surnname = Sname;
    }
  }
  //   Email verification
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (Emailad === " " || Emailad == null) {
    Emailerror.innerHTML = "please input Email";
    isValid = false;
  } else {
    if (!emailRegex.test(Emailad)) {
      Emailerror.innerHTML = "Email incorrect";
      isValid = false;
    } else {
      Emailerror.innerHTML = "";
      result.email = Emailad;
    }
  }
  //   password
  if (Passwords === "" || Passwords == null) {
    PasswordsError.innerHTML = "please input password";
    isValid = false;
  } else {
    PasswordsError.innerHTML = "";
    result.password = Passwords;
  }

  if (!isValid) {
    return;
  }
  myFunction(result);
  //   console.log("Form submitted with data:", result);
}
function myFunction(result) {
  console.log(result);
  let myPopup = document.getElementById("myPopup");
  let popinfo = myPopup.classList.toggle("show");
  let bye = (popinfo.innerHTML = result);
  console.log(bye);
  //   hello.classList.toggle("show");
  //   innerHTML = result;
}
