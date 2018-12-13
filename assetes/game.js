alert("Welcome to my guess game! You'll have 20 chances to get it right. Enjoy!'")
    updateScoreboard();

    
var
    wins = 0,
    losses = 0;
    lost=0;
console.log(wins);
console.log(losses);



    //list of words that can be used for the game
var wordArray = [
    "ford",
    "dodge",
    "chevrolet",
    "tesla",
    "subaru",
    "volkswagon",
    "toyota",
    "buick",
    "volvo",
]
//the charactors that will be accecpted to reference for correct
var inputArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
console.log(inputArray);

var userGuesses = []
var secretWord = pickNewWord()

console.log(secretWord);

updateWordOnPage();
console.log(updateWordOnPage);
document.onkeyup = function (event) {
    var userGuess = event.key;
    var loseAGuess = true;
    for (let i = 0; i < userGuesses.length; i++) {
        var previousGuess = userGuesses[i];
        console.log(userGuesses);
        if (previousGuess == userGuess) {
            console.log(userGuess);
            console.log(userGuesses);
            return;
        }
    }
    userGuesses.push(userGuess);

    for (let i = 0; i < secretWord.length; i++) {
        var letter = secretWord[i];
        if (letter == userGuess) {
            loseAGuess = false;
        }
    }

    if (userGuess == wordArray) {
        wins++;
        console.log(userGuess);
        console.log(wordArray);
    } else {
        losses++;
    }
    if (losses == 20) {
        startNewRound();
        alert("You lost, the Automobile manufacture was " + secretWord + " Would you like to try again?");
    }
    updateWordOnPage();
    updateScoreboard();
    updateUserGuessesOnPage();
    var gameOver = true;
    for (var i = 0; i < secretWord.length; ++i) {
        var letter = secretWord[i];
        if (!userGuesses.includes(letter)) {
            console.log("notwinning yet");
            var gameOver = false;
        }
    }
    if (gameOver == true) {
        alert("winner!");
        startNewRound();
        updateWordOnPage();
        updateScoreboard();
        updateUserGuessesOnPage();
    }
};

function startNewRound() {
    wins += 1;
    losses = 0;
    userGuesses = []
    pickNewWord()
}

function pickNewWord() {
    secretWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    return secretWord;
    console.log(wordArray)
    console.log(wordArray.length)
}

function updateWordOnPage() {
    var wordString = '';
    for (var i = 0; i < secretWord.length; ++i) {
        var letter = secretWord[i];
        if (userGuesses.includes(letter)) {
            wordString += letter + ' ';
        } else {
            wordString += '_ ';
            console.log(wordString);
            
        }
    }
    var wordDiv = document.getElementById('word');
    wordDiv.textContent = wordString;
}

function updateScoreboard() {
    var winsDiv = document.getElementById('wins');
    winsDiv.textContent = wins;
    var lossesDiv = document.getElementById('losses');
    lossesDiv.textContent = losses;
}

function updateUserGuessesOnPage() {
    // Writes out the user's guesses to the guess div.
    var wordString = '';
    for (var i = 0; i < userGuesses.length; ++i) {
        var letter = userGuesses[i];
        wordString += letter + ', ';
        console.log(userGuesses);
        
    }
    wordString = wordString.slice(0, -2);{
    var userGuessesElement = document.getElementById('letters-guessed-so-far');
    userGuessesElement.textContent = wordString;
}
}
