 //MAJORITY OF CODE WORKS ON CHROME--> INSPECT-->CONSOLE

//we can start console i.e. terminal of chrome, it acta same as terminal of vs code, to access it
//1. open html code in chrome
//2. inspect it, then go to body 
//3. right click support_jas_1, select reveal in sources panel
//4. select console from top, you will get the terminal
/*
var myvar=; //we defined that myvar is of type variable
myvar=11
11 //when yoou press enter it will print the value you set
myvar -=1 //it will subtract 1 to the value of my var
10
myvar++
11
myvar++
12
myvar-- //whenever you put a math task always check what variable s currently set like 12+1=13, check if var is 13 then only use 2nd value
13 //this is output of myvar=, in short, sometimes you dont get the desired output on the g, you need to ask myvar to get utput sometimes
myvar--
12
myvar
11
myvar ++
11
myvar
12

there is --myvar or myvar-- and same for +- multiply divide, it is a bit similar to python*/
/*var jas= "hello" //we defined a variable as text (which is somehow allowed here)
undefined //ignore it
document.write(jas) //this is used to make a new html website to print this particular text i.e. jas
undefined //ignore
console.log(jas) //it is used to print the text
hello
document.write(10) //it will write 10 in jas document, i.e. we will get output as hello10
*/
console.log("WAZZUP!") //this thing cannot be found on the website but on the vconsole or in the output of VS Code
/*7 > 6 //its boolean expression
true
var i_like_summer= true
undefined
i_like_summer
true
i_like_winter=false
false
var i_like_winter= false
undefined
i_like_monsoon //we didnt define it so it will show error obviously
VM312:1 Uncaught ReferenceError: i_like_monsoon is not defined
    at <anonymous>:1:1
(anonymous) @ VM312:1
7 ==7 //we dont use = we use ==
true
Boolean(7>5) //it is also a way to ask for boolean
true
Boolean(-6) //until the value inside () is 0 or empty it will print true
true
Boolean(6)
true
Boolean(0) //0 so false
false
Boolean("Hello")
true
Boolean("") //empty so false
false */

// var you_like_summer = true;
// if(you_like_summer){
//     document.write("Here are summer clothes...");
// }
// else{
//     document.write("Here are winter clothes...")
// }
//Commented the below data out because i dont want to answer qustions in order to access the website as of now
// preference = prompt("which is your favourite season? 1. summer 2. winter");
// if(preference == "summer"){
//     document.write("you like summer" + "<br>");
// }
// else if(preference == "winter")
// {
//     document.write("you like winter" + "<br>");
// }
// else{
//     document.write("you like " + preference + "<br>"); //ALWAYS ADD BREAK STATEMENT IN "" WITHOUT <br> thee code will be in one single line
// }


// var x=5
// undefined
// x==5 // == is used to compare everything including numbers, texts etc
// true
// x="5" //we now defined x as a string
// '5'
// x===5 //=== helps us compare only numbers!
// false //since x is not a string it says false
// x !=4 //!= means not equal
// true
// y !==5
// true
// y !== '7'
//false
//Commented the below data out because i dont want to answer qustions in order to access the website as of now
// var myAge= prompt("What is your age?")
// if (myAge >= 18 && myAge <=30){ //&& means and 
//     document.write("You are eligible for this interview"+ "<br>")
// }
// else if(myAge <18){
//     document.write("You are underaged for this interview"+ "<br>")
// }
// else{
//     document.write("You are overaged for this interview"+ "<br>")
// }
// //we can save many lines of else if etc if we use ||
// var ur_age= prompt("What is your age bro?")
// if (ur_age <18 || ur_age>30 || ur_age==25){ //|| means or
//     document.write("You are unfit for this interview"+ "<br>")
// }
// else{
//     document.write("you are fit for this interview"+ "<br>")
// }
//Commented the below data out because i dont want to answer qustions in order to access the website as of now
// var my_age=prompt("MY AGE?");
// while(my_age<25 && my_age>18){
//     console.log("You can give SSB")
//     document.write("SSB" + "<br>")
//     my_age++
// }
// document.write("SSB is an interview")

// var links = document.getElementsByTagName("a"); //just an example of for loop, if having doubt see this in python's notes
// for(i=1; i <= links.length; i++){ //the links present in html file are a part of this program
//     console.log("This is link number" + i)
// }
// document.write("all links are under for loop")

// for (i=0; i<10; i++){
//     console.log(i);
//     if(i===7){
//         break;
//     }
// }
// console.log("Loop exited")

// for (i=0; i<10; i++){
    // if(i===5 || i===3){ //this means that if i is 5 or 3 then skip the code which was to be executed for 5 and 3
    //     continue;
    // }
//     document.write(i + "<br>");
//     if(i===7){
//         break;
//     }
// }
// document.write("Loop exited")

//run the above two to see the difference between console.log and document.write, in consle, we get output in console and not in webpage

// function getAvg (a,b){ //function helps us tell the pc that we are doing math here
//     var Average=(a+b)/2; //we gave the formula we want a and b to be put in
//     console.log(Average); 
//     return Average
// }
// var myResult= getAvg(2,4,8); //if we put 3 numbers qhere only 2 are accepted then 3rd will be neglected
// console.log("The average is "+ myResult)

// var a="7"
// var b=5
// console.log(a+b); //we get 75 as 7 is a string
// console.log(typeof (a+b)); //this will tell the type of a+b, if its a string, variable or what, actually, it is a string because one or more components of a or b are string

// //there are various math equations we can use to solve
// console.log(Math.round(7.8)); //this will round off the digit
// console.log(Math.floor(7.8)); //this will round off the digit to the lower number like here we get 7
// console.log(Math.ceil(7.8)); //this will round off the digit to the higher number like here we get 8
// console.log(Math.max(7,8,9,4)); //this will print the max number amongst the ones given
// console.log(Math.min(7,8,9,4)); //this will print the min number amongst the ones given

// var alpha = "hello"
// var beta = 5;
// if(NaN(alpha)){ //NaN stands for not a number, its name defines itself
//     //if in any case we want something which is not a NaN, we can type !NaN instead of NaN, it serves the same purpose as replacing the text inside if and else
//     console.log("alpha is not a number")
// }
// else{
//     console.log("the answer to your multiplication is " + (alpha*beta));
// }

// var myString = "Yes, I am a student"
// console.log(myString.length); //it will tell length of the whole statment
// console.log(myString.toUpperCase); //it will make all the text to upper case
// console.log(myString.toLowerCase) //it will make all the text to lower case
// console.log(myString.indexOf("student"));  //it will find the index or place of the particular word
// //but what if we search a word that is not in the text?
// if(myString.indexOf("Jaspreet")===-1){ //-1 represent all the words which are NOT available in the text
//     console.log("This word is not in the string");
// } 
// else{
//     console.log("Thiis word is at position " + myString.indexOf("Jaspreet"))
// }

//we can compare two different strings too!
// var String1= "hello"
// var String2= "Hello"
// console.log(String1 === String2);//we will get false as hello and Hello are not same
// //we can perform other operations too
// console.log(String1.toLowerCase === String2.toLowerCase); //who knows, if we can match the text by making it to lower text haha

// var qwerty="hello" //we have everything in lower case
// var yuiop="Hello" //just 1 alphabet in upper case
// console.log(qwerty==yuiop); //we will get false as discussed above
// console.log(qwerty>yuiop);//we will get True because if the text is containing more Uppercase letter then its power(in my terms) will get low and will get defeated by lowercase text
// console.log(qwerty<yuiop);//like if i replace H in yuiop to h and replace h to H in qwerty, then yuiop>qwerty

// var gamma="Hello, world"
// var gamma2=gamma.slice(2,9);//it will only print text from position 3 to 7 COUNTING STARTS FROM 1 NOT 0
// var gamma3=gamma.slice(2); //we need not tell the ending place
// var delta="DSA, Language, DataStructure, interview, LeetCoding" //we made a list of things
// var delta_Array=delta.split(","); //we split it using ,
// console.log(delta_Array); //we simply get an array

// var lmao= []; //this tells that we are starting an array
// lmao[0]=25 //posiitons
// lmao[1]="LOL"
// lmao[2]=true
// console.log(lmao); //used to print array
// console.log(lmao.length); //using to tell number of elements in array
// console.log(lmao.sort()); //used to sort the array in ascending order PRIORITY ORDER: variable, script, boolean
// console.log(lmao.reverse()); //used to reverse the array

//NOW REACH OUT TO NEW FILE NAMED  JAS_1_OOP FOR JAVASCRIPT OOP

//this
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function() {
  if (content.className === "open") {
    // shrink the box
    content.className = "";
    button.innerHTML = "Show More";
  } else {
    // expand the box
    content.className = "open";
    button.innerHTML = "Show Less";
  }
}
