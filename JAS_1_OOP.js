 //MAJORITY OF CODE WORKS ON CHROME--> INSPECT-->CONSOLE
 
 var myArray = new Array(); //new array
 myArray[0] = 8; //elements
 myArray[1] = "hello";

var myCar= new Object(); 
myCar.maxSpeed = 50;
 myCar.driver = "Shaun";

 var myCar = new Object();

 myCar.drive = function() 
 { console.log("now driving");};
 myCar.drive(); //whgen we ask for myCar.drive  it will give "now driving"

 var myCar2 = {
 maxSpeed: 70,
 driver: "Net Ninja",
 drive: function(speed, time) 
 { console.log(speed + " & " + time); 
console.log(this.maxSpeed) //this.*anything* refers to the thing that, it will print the output of this particular 
//category i.e. mycar2 i.e. if i want to get maxspeed of mycar2, instead of typing myCar2.maxSpeed, i can type 'this'
//the condition is, you can't mention this keyword outside myCar2.
}
};
//i cant use 'this' keyword outside myCar2 i.e. here
 console.log(myCar2.maxSpeed);
 myCar2.drive(50, 3);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Car = function(fastspeed, rider){ //Car contains fastspeed and rider
    this.fastspeed = fastspeed; //we learned 'this' we now told that this.fastspeed is fastspeed
    this.rider=rider;
    this.flyway = function(pace, duration){ //we gave a function name called flyway
        console.log(pace * duration); //when we put values inside flyway it will but those values in this formula to get the values
    };
    this.logRider=function(){ // this will tell the name of rider when we want to extract the data as per the car name
        console.log("Driver name is " + this.rider)
    }
}
var thecar = new Car(70, "Delta"); //details for the cars
var thecar2 = new Car(80, "Alpha");
var thecar3 = new Car(90, "Beta");
var thecar4 = new Car(60, "Gamma");

thecar.flyway(56, 5);
thecar3.logRider(); //this will give the details of the rider

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var dolby=new Date(2023 /*year */,0/*month, Jan=0, feb=1 */,6/*day */,13/*hour */,46/*minute */,15/*seconds */ );//I AM UNABLE TO SET THE DAY, ASK FOR HELP
console.log(dolby);
console.log(dolby.getMonth);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var hi= document.getElementsByClassName("content"); //this will give us the class 'content' and its components
var hello= hi[1].getElementsByTagName("h2"); //[1] means that 2nd class, h2 means h2, i.e. we can extract the components of h2 present inside 2nd
//class with the same name 'content' like div class="content", div class= "content" then we can get data of 2nd "content"
hello[0].innerHTML="A new name"; //we can replace the data of first h2 i.e. [0] to a new name by this 
document.getElementById("page-title"); //we just check whether the data is actually changed or not
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var link = document.getElementById("test");
link.setAttribute("class", "pie"); //this means that we can change the name of class from any name to pie
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var newA=document.createElement("a");  //it helps create an element <a> and </a>
var logger=document.getElementById("main-nav").getElementsByTagName("ul")[0]; //we can definre where that new element must be placed
logger.appendChild(newA);//we can place this <a></a> at the same place where we have put <ul> by appendchild
newA.innerHTML="Blog"; //we can enter text INSIDE <a> using this line
logger.removeChild(newA); //we can remove that child too
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var header=document.getElementById("page-title"); //page title is some element on the webpage
header.onclick=function(){ //whenever we click that eleent it will shoow this text
    alert("You clicked me");
};
header.onmouseover=function(){ //when we hover it will show this
    alert("You hovered over me"); //just remember the syntax and on line 71, its onmouseover not onmousehover
};
//FOR THE NEXT CONCEPT I.E. SHOW MORE TYPE, REACH OUT TO SUPPORT_JAS_1.JS