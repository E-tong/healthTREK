// Elise - Please do not edit this code; this is for the mood part of the homepage. Thanks for understanding! :)
var nScore = 0;
var pScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
// Get Id of variables//
var bm1 = document.getElementById("bm1");
var bm2 = document.getElementById("bm2");
var bm3 = document.getElementById("bm3");
var bm4 = document.getElementById("bm4");
var bm5 = document.getElementById("bm5");
var bm6 = document.getElementById("bm6");
var bm7 = document.getElementById("bm7");
var bm8 = document.getElementById("bm8");
var bm9 = document.getElementById("bm9");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
bm1.addEventListener("click", n);
bm2.addEventListener("click", n);
bm3.addEventListener("click", n);
bm4.addEventListener("click", n);
bm5.addEventListener("click", n);
bm6.addEventListener("click", p);
bm7.addEventListener("click", p);
bm8.addEventListener("click", p);
bm9.addEventListener("click", p);
bm1.addEventListener("click", disableQ1);
bm2.addEventListener("click", disableQ2);
bm3.addEventListener("click", disableQ3);
bm4.addEventListener("click", disableQ4);
bm5.addEventListener("click", disableQ5);
bm6.addEventListener("click", disableQ6);
bm7.addEventListener("click", disableQ7);
bm8.addEventListener("click", disableQ8);
bm9.addEventListener("click", disableQ9);

function n() {
  nScore = 1;
  updateResult();
}
function p() {
  pScore = 1;
  updateResult();
}

function updateResult() {
  var result = document.getElementById("result");
  updateNCount(nScore);
  if (nScore == 1) {
    result.innerHTML = "<br><p2> You feel pessimistic. I know exactly what you need to brighten your day! Come and visit the Activities page (you can find a link in the navigation bar above!), and find some exciting activities to do! You may even learn a thing or two 😎</p2>";
  } else  {
    result.innerHTML = "<br><p2> You have a lot of positivity today! Let's keep that vibe pumping!</p2>";
  } 
}

// Disabling other options. 
function disableQ1() {
  document.getElementById("bm2").disabled = true;
  document.getElementById("bm3").disabled = true;
  document.getElementById("bm4").disabled = true;
  document.getElementById("bm5").disabled = true;
  document.getElementById("bm6").disabled = true;
  document.getElementById("bm7").disabled = true;
  document.getElementById("bm8").disabled = true;
  document.getElementById("bm9").disabled = true;
}
function disableQ2() {
  document.getElementById("bm1").disabled = true;
  document.getElementById("bm3").disabled = true;
  document.getElementById("bm4").disabled = true;
  document.getElementById("bm5").disabled = true;
  document.getElementById("bm6").disabled = true;
  document.getElementById("bm7").disabled = true;
  document.getElementById("bm8").disabled = true;
  document.getElementById("bm9").disabled = true;
}
function disableQ3() {
  document.getElementById("bm1").disabled = true;
  document.getElementById("bm2").disabled = true;
  document.getElementById("bm4").disabled = true;
  document.getElementById("bm5").disabled = true;
  document.getElementById("bm6").disabled = true;
  document.getElementById("bm7").disabled = true;
  document.getElementById("bm8").disabled = true;
  document.getElementById("bm9").disabled = true;
}
function disableQ4() {
  document.getElementById("bm1").disabled = true;
  document.getElementById("bm2").disabled = true;
  document.getElementById("bm3").disabled = true;
  document.getElementById("bm5").disabled = true;
  document.getElementById("bm6").disabled = true;
  document.getElementById("bm7").disabled = true;
  document.getElementById("bm8").disabled = true;
  document.getElementById("bm9").disabled = true;
}
function disableQ5() {
  document.getElementById("bm1").disabled = true;
  document.getElementById("bm2").disabled = true;
  document.getElementById("bm3").disabled = true;
  document.getElementById("bm4").disabled = true;
  document.getElementById("bm6").disabled = true;
  document.getElementById("bm7").disabled = true;
  document.getElementById("bm8").disabled = true;
  document.getElementById("bm9").disabled = true;
}
function disableQ6() {
  document.getElementById("bm1").disabled = true;
  document.getElementById("bm2").disabled = true;
  document.getElementById("bm3").disabled = true;
  document.getElementById("bm4").disabled = true;
  document.getElementById("bm5").disabled = true;
  document.getElementById("bm7").disabled = true;
  document.getElementById("bm8").disabled = true;
  document.getElementById("bm9").disabled = true;
}
function disableQ7() {
  document.getElementById("bm1").disabled = true;
  document.getElementById("bm2").disabled = true;
  document.getElementById("bm3").disabled = true;
  document.getElementById("bm4").disabled = true;
  document.getElementById("bm5").disabled = true;
  document.getElementById("bm6").disabled = true;
  document.getElementById("bm8").disabled = true;
  document.getElementById("bm9").disabled = true;
}
function disableQ8() {
  document.getElementById("bm1").disabled = true;
  document.getElementById("bm2").disabled = true;
  document.getElementById("bm3").disabled = true;
  document.getElementById("bm4").disabled = true;
  document.getElementById("bm5").disabled = true;
  document.getElementById("bm6").disabled = true;
  document.getElementById("bm7").disabled = true;
  document.getElementById("bm9").disabled = true;
}
function disableQ9() {
  document.getElementById("bm1").disabled = true;
  document.getElementById("bm2").disabled = true;
  document.getElementById("bm3").disabled = true;
  document.getElementById("bm4").disabled = true;
  document.getElementById("bm5").disabled = true;
  document.getElementById("bm6").disabled = true;
  document.getElementById("bm7").disabled = true;
  document.getElementById("bm8").disabled = true;
}


// Cookies!
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  //document.cookie = "nCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function updateNCount(nScore) {
  var nCount = getCookie("nCount");
  var cnt = Number(nScore) + Number(nCount);
  setCookie("nCount", cnt, 30);
  if(nCount > 3) {
    alert("Hey there! We see that you have been feeling rather unhappy these days. Please go to the NIMH page to read more about mental health, and how you can feel better again!" );
    setCookie(nCount = 0);
  }
  
}

function checkLogin() {
  var email = document.getElementById("eml").value;
  var password = document.getElementById("psw").value;
  var cmail = getCookie("email");
  var cpass = getCookie("password");
  var cuser = getCookie("username");
  // alert("Email: " + email + " password: " + password + " Cmail: " + cmail + " cpass: " + cpass + " cuser: " + cuser);
  if (cmail == email && cpass == password) {
    location.replace("home.html");
  } else {
    location.replace("register.html");
  }
}

function regAcc() {
  setCookie("username", document.getElementById("reguser").value, 60);
  setCookie("email", document.getElementById("regemail").value, 60);
  setCookie("password", document.getElementById("regpass").value, 60);
  
  var cuser = getCookie("username");
  var cmail = getCookie("email");
  var cpass = getCookie("password");
  // alert("cuser: " + cuser + " cmail: " + cmail + " cpass: " + cpass );

  location.replace("home.html");
}
