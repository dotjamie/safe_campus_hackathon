// var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://mysafecampus.firebaseio.com/");

var firstName = document.getElementById('first_name');
var lastName = document.getElementById('last_name');
var email = document.getElementById('email');
var sendBtn = document.getElementById('sendBtn');
var signupSuccess = document.getElementById('signupSuccess');
var signupError = document.getElementById('signupError');

var onMessageComplete = function(error) {
  sendBtn.disabled = false;
  if (error) {
    contactError.innerHTML = 'Sorry. Could not send message.';
  } else {
    contactSuccess.innerHTML = "Message has been sent.";
    // // hide the form
    // contactFrom.style.display = 'none';
  }
};

function sendReport(formObj) {
    var myFirebaseRef = new Firebase("https://mysafecampus.firebaseio.com/");
    myFirebaseRef.push({
      firstName: formObj.firstName.value,
      lastName: formObj.lastName.value,
      email: formObj.email.value
    }, onMessageComplete);
    sendBtn.disabled = true;
    return false;
}
