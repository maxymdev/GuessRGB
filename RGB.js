var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("#resetB");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons
	setupModeBtns();
	setupSquares();
	reset();
}

function setupModeBtns(){
	for (var i=0; i<modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function setupSquares(){
		for (var i = 0; i < squares.length; i++){
	//clisk listeners
		squares[i].addEventListener("click", function(){
		var clickedColor =  this.style.backgroundColor;

		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
		});


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}


function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors

	for (var i = 0; i < num; i++) {
		//get random color and puch into array
		arr.push(randomColor())
		
	}

	//return that array
	return arr;
} 

function randomColor(){
	//pick RED from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick GREEN from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick BLUE from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	h1.style.backgroundColor = "steelblue";
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	h1.style.backgroundColor = "steelblue";
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
		
// 	}
// })

// resetButton.addEventListener("click", function(){

// 	//generate all new colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelblue";
// 	resetButton.textContent = "New Colors";
// 	messageDisplay.textContent = " ";
// 	//change colors of squares
// 	for (var i = 0; i < squares.length; i++){
// 	// coloring squares
// 	squares[i].style.background = colors[i];}

// })
