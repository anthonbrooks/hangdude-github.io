// words to guess
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

// pick a random word for a single gameplay
var word = words[Math.floor(Math.random() * words.length)];

// set up for answer array
var answerArray = [];
for (var i = 0, l = word.length; i < l; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

// main game loop
while (remainingLetters > 0) {
    // show player progress
    alert(answerArray.join(" "));

    // get guess letter from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
	// exit the game loop (end game)
	break;
    } else if (guess.length !== 1) {
	alert("Please enter a single letter.");
    } else {
	// update the game state with the guess
	for (var j = 0, m = word.length; j < m; j++) {
	    if (word[j] === guess) {
		answerArray[j] = guess;
		remainingLetters--;
	    }
	}
    }
    // end of game loop
}

// show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
