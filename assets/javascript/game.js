var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userScore = 0;
var compScore = 10;
var losses = 0;
var guessed = [];
var winner;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function reset() {

    compScore = 10;
    guessed = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function (event) {

    console.log("user played " + event.key + " computer played " + computerGuess);
    guessed.push(event.key);
    if (event.key === computerGuess) {
        document.getElementById("winner").innerHTML = "YOU WIN!";
        userScore++;
        reset();
    }

    else if (event.key !== computerGuess) {

        compScore--;
        if (compScore < 1) {
            console.log("LOSER");
            document.getElementById("winner").innerHTML = "LOSER! Keep Trying!";
            losses++;
            reset();
        }
        else {
            document.getElementById("winner").innerHTML = "Oh, so you're trying again, huh?";
        }
    }


    document.getElementById("userscore").innerHTML = userScore;
    document.getElementById("compscore").innerHTML = compScore;
    document.getElementById("guessed").innerHTML = guessed;
    document.getElementById("losses").innerHTML = losses;

};