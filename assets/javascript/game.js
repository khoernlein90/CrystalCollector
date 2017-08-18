$(document).ready(function() {

var counter = 0;
var wins = 0;
var losses = 0;
var numberToGuess = [Math.floor(Math.random() * 101) + 19];

function newGame(){
	counter = 0;
	numberToGuess = [Math.floor(Math.random() * 101) + 19];
	$(".mainNumber").text("Target Number: " + numberToGuess);
	$(".currentNumber").text("Current Number: " + counter);
	var crystal1 = [Math.floor(Math.random() * 11) + 1];
	var crystal2 = [Math.floor(Math.random() * 11) + 1];
	var crystal3 = [Math.floor(Math.random() * 11) + 1];
	var crystal4 = [Math.floor(Math.random() * 11) + 1];
	console.log(crystal4);
	console.log(crystal1);

	$(".1").attr("value", crystal1);
	$(".2").attr("value", crystal2);
	$(".3").attr("value", crystal3);
	$(".4").attr("value", crystal4);
}

$(".mainNumber").text("Target Number: " + numberToGuess);

$("img").on("click", function(){
	var theValue = ($(this).attr("value"));
	theValue = parseInt(theValue);

	counter += theValue;

$(".currentNumber").text("Current Number: " + counter);

	if (counter == numberToGuess) {
		wins++
		alert("You Win!");
		newGame();
	}
		else if (counter >= numberToGuess ) {
			losses++
			alert("You Lose!")
			newGame();
		}
	
$(".wins").text("Wins: " + wins);
$(".losses").text("Losses: " + losses);

});

newGame();

});
