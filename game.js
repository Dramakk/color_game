var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("span");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(var i = 0; i<squares.length; i++){
        //add click event listeners to squares
        squares[i].addEventListener('click', function(){
            //get color of the clicked square
            var clickedColor = this.style.backgroundColor;
            //compare it with the pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                resetBtn.textContent = "PLAY AGAIN?";
            }
            else{
                messageDisplay.textContent = "Try again!";
                this.style.backgroundColor = "#232323";
            }
        })
    }
}

function setUpModeButtons(){
    //how many squares to show
    //pick new colors
    //pick new pickedColor
    //update page
    for(var i = 0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add("selected");
            this.textContent === "EASY" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    };
}

function reset(){
    messageDisplay.textContent = "";
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //changed colorDisplay to match new pickedColor
    colorDisplay.textContent = pickedColor.toUpperCase();
    //change colors of squares
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "NEW COLORS?";
}

resetBtn.addEventListener('click', reset);

function changeColors(color){
    //loop through all squares
    //change each color to match the given color
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    var number = Math.floor(Math.random() * colors.length);
    return colors[number];
};

function generateRandomColors(num){
    //make an array
    //add num random colors to array
    //return the array
    var arr = [];
    for(var i = 0; i<num; i++){
        //get random color and push it into array
        arr.push(randomColor());
    }
    return arr;
};
function randomColor(){
    //pick three channel values from 0 to 255
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return "rgb(" + R + ", " + G + ", " + B + ")";
}