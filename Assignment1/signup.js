messages = {
  false: {
    mess: "Already have an Account?",
    action: "Sign Up",
    alt: "Login",
  },
  true: {
    mess: "Don't have an Account?",
    action: "Login",
    alt: "Sign Up",
  },
};

var actIsLogin = false;

function sendRequest() {
  var x = new XMLHttpRequest();
  x.onload = function() {
    if (this.status == 200 && this.readyState == 4) {
      alert("hi");
    }
  }
  x.open("GET", "dashboard.html", true);
  x.send();
  // document.getElementById("username").innerText = user.username;
  // document.getElementById("password").innerText = user.password;
  // console.log(user[username]);
}

function SetError(error) {
  document.getElementsByClassName("FormErrors")[0].innerHTML = error;
}

function SignUp() {

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;

  if (username == "") SetError("Username cannot be empty.")
  else if (localStorage.getItem(username))  SetError("User already exists.");
  if (pass1 == "" || pass2 == "") SetError("Password cannot be empty.");
  else if (pass1 != pass2 ) SetError("Password does not match.");
  else {
    var user = {
      username: username,
      email: email,
      password: pass1,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    SetError("User Created Successfully.");
  }
}

function Login(e) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);

  if (user == null) SetError("Account does not exist.");
  else if (password != data.password) SetError("Password incorrect.");
  else {
    SetError("User Logged in Successfully.");
    // $(location).attr('href', "/dashboard.html");
    sendRequest(data);
  }
}

// function toggleAction(e) {
//   event.preventDefault();
//   actIsLogin = actIsLogin ? false : true;
//   document.getElementById("actionName").innerText =
//     messages[actIsLogin].alt;
//   document.getElementById("submitBtn").innerText =
//     messages[actIsLogin].action;
//   document.getElementById("actionTitle").innerText = messages[actIsLogin].mess;

//   if (actIsLogin) {
//     document.getElementById("passDiv2").style.display = "none";
//     document.getElementById("emailDiv").style.display = "none";
//     document.getElementById("submitBtn").onclick = function () { Login() };
//     document.getElementById("signup-form").onsubmit = function () { Login() };
//   } else {
//     document.getElementById("emailDiv").style.display = "block";
//     document.getElementById("passDiv2").style.display = "block";
//     document.getElementById("submitBtn").onclick = function () { SignUp() };
//     document.getElementById("signup-form").onsubmit = function () { SignUp() };
//   }
// }


  // $.ajax({
  //   type: 'POST',
  //   url: 'http://127.0.0.1:5500/dashboard.html',
  //   data: userdata,
  //   success: function(data){
  //    window.location = "http://127.0.0.1:5500/dashboard.html";
  //   },
  //   error: function(xhr, type, exception) { 
  //     // if ajax fails display error alert
  //     alert("ajax error response type "+type);
  //   }
  // });

  // himanshu - 47210
  // jahavi - 37545