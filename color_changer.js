document.addEventListener("DOMContentLoaded", function() { //this helps us list the events we are performing
    var colorChanger = document.getElementById("colorChanger"); //we defined what we are going to do, we are going to change colors
    var colors = ["red", "blue", "green", "pink"]; //we mention what ll colors we will be using
    var counter = 0; //initial value-0

    function changeColour() { 
        if (counter >= colors.length) { //the color will start from 0 and will start to change color with ncreasing value
            counter = 0;
        }
        colorChanger.style.background = colors[counter];
        counter++;
    }

    var myTimer = setInterval(changeColour, 3000); //each color will change after 3000 milliseconds

    colorChanger.onclick = function() { 
        clearInterval(myTimer);
        colorChanger.innerHTML = "Timer stopped";//when all colors will beb exhausted this will get printed
    };
});
