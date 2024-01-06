//this code helps us when someone dont enter the name in the checkbox thhen an error will occur saying 'please enter a name'
var myForm = document.forms.myForm; //location where we have to fetch the data from
var message = document.getElementById("message");

myForm.onsubmit = function() { //on submit i.e. when someone submits the form

  if (myForm.name.value == "") { //if nothing is entered i.e. ""
    message.innerHTML = "please enter a name";
    return false; //false means that what they are doing is wrong as per my standards
  } else {
    message.innerHTML = "";
    return true;
  }

};
