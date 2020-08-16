// notes and question page
var containerA = $("#notesContainer");
var submitA = $("#submitNotes");

submitA.on("click", appendNotes);

  function appendNotes(e) {
    e.preventDefault();
    var notes = $("#notes").val();

    containerA.append(`<p> ${notes} </p>`);
  }

var containerB = $("#qContainer");
var submitB = $("#submitQ");

submitB.on("click", appendQ);

  function appendQ(e) {
    e.preventDefault();
    var q = $("#q").val();

    containerB.append(`<p> ${q} </p>`);
  }

var username = document.getElementById("username");


var section1 = $(".thanks1");
var createAccount1 = $(".createAccount1");

createAccount1.on ("click", printMessage1);

    function printMessage1 () {
     section1.text("Your account has been successfully created!");
    }

var section2 = $(".thanks2");
var createAccount2 = $(".createAccount2");

createAccount2.on ("click", printMessage2);

    function printMessage2 () {
     section2.text("Your account has been successfully created!");
    }

 var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}