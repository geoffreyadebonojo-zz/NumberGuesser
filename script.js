
var NUMBER = Math.round(Math.random()*100)
var inputEl = document.querySelector('.input');
var answer = "nothing yet"
var answerField = document.querySelector('.answer');
answerField.innerHTML = answer;

//GUESS BOTTON
var guessButton = document.querySelector('.guessbutton');
guessButton.addEventListener('click', guessCheck);
function guessCheck () {
	console.log("Guess");
	console.log(inputEl.value);
	console.log(NUMBER)
	if (inputEl.value == NUMBER) {
	console.log("Correct!")}
	else {
	console.log("Incorrect.");
	}
};

//DISPLAY RESULT
var resultField = document.querySelector('.result')

//CLEAR BUTTON
var clearButton = document.querySelector('.clearbutton');
clearButton.addEventListener('click', clearCheck);

function clearCheck () {
	inputEl.value = "";
	console.log("Clear");
}

var resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', newNumber);
function newNumber () {
	var NUMBER = Math.round(Math.random()*100);
}




