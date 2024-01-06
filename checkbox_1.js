//THIS CODE WORKS ON CHROME--> INSPECT-->CONSOLE
//I WANT TO MAKE AN ERROR MESSAGE ON THIS CHECKBOX'S SOME CONTENT SO I AM MAKING A FILE NAMED "CHECKBOX_ERROR.JS"
//THIS FILE IS A PART OF CUSTOMISING THE CHECKBOX AND ITS PROPERTIES
document.forms.myform;
var myForm=document.forms.myForm;
myform.name
myform.name.value
myform.color.value
myform.name.onfocus= function(){
    myform.name.style.border= "4px solid pink";
};
myform.name.onblur=function(){
    myform.name.style.border="none";
};
