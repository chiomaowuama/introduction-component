// let Fname = document.getElementById("firstname").value;
// let Sname = document.getElementById("secondname").value;
// let Emailad = document.getElementById("emails").value;
// let Passwords = document.getElementById("password").value;
// console.log(Fname  + ", " Sname, +  Emailad + Passwords)
function submits(event) {
  event.preventDefault();
  let Fname = document.getElementById("firstname").value;
  let errorfirst = document.getElementById("errorfirst");
  let Sname = document.getElementById("secondname").value;
  let errorsec = document.getElementById("errorsec");
  let Emailad = document.getElementById("emails").value;
  let Passwords = document.getElementById("password").value;
  console.log(Fname + ", " + Sname + "," + Emailad + ", " + Passwords);
  let result = [];

  const regex = /^[A-Za-z]+$/;
  //   firstname verification
  if (Fname === "" || Fname == null) {
    errorfirst.innerHTML = "please input firstname";
  } else {
    if (!regex.test(Fname)) {
      errorfirst.innerHTML = "please Alphabets only and no space";
    } else {
      errorfirst.innerHTML = "";
      result.firstname = Fname;
    }
  }
  // surnname verification
  if (Sname === "" || Sname == null) {
    errorsec.innerHTML = "please input Surnname";
  } else {
    if (!regex.test(Sname)) {
      errorsec.innerHTML = "please Alphabets only";
    } else {
      errorsec.innerHTML = "";
      result.Surnname = Sname;
    }
  }
}
