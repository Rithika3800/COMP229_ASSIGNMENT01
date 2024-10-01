"use strict";

const words = ["Love", "Happy", "Angry", "Excited", "Tired"]; // Array of Random Words
var currentWord; // Store current word

// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");
var guessedLetters; 
var correctLetters = 0; // Track how many correct letters there are
function startGame() {
  inputBox.style.display = "block"; // Show Inputbox
  wordDiv.innerHTML = ""; // Clear the word
  msgBox.innerHTML = ""; // Clear the message box
  inputBox.disabled = false; // Enable inputbox
  inputBox.value = "";
inputBox.focus(); // Focus input box
currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Set current word to guess
  correctLetters = 0; // Reset correctLetters
  
  
  guessedLetters = new Set();
  // Create elements for each letter and placing a * in it
  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    var starDiv = document.createElement("div");
    var lineDiv = document.createElement("div");
    letterDiv.className = "wordBox";
    starDiv.className = "wordBox-letter";
    starDiv.innerText = "*";
    lineDiv.className = "wordBox-line";
    letterDiv.appendChild(starDiv);
    letterDiv.appendChild(lineDiv);
    wordDiv.appendChild(letterDiv);
  }
}

function letters() {
  var guessedLetter = inputBox.value.toUpperCase();
  inputBox.value = ""; 
if (guessedLetters.has(guessedLetter)) {
    return; 
  }
guessedLetters.add(guessedLetter); 
 var found = false;
  for (let j = 0; j < currentWord.length; j++) {
    if (currentWord[j] == guessedLetter) {
      wordDiv.children[j].firstChild.innerText = guessedLetter;
      correctLetters++;
      found = true;
    }
  }
 if (found && correctLetters === currentWord.length) { msgBox.innerText='You guessed it right!';
    inputBox.disabled = true;}
}

inputBox.addEventListener("keyup", () => {setTimeout(letters, 300); 
});

startButton.addEventListener("click", startGame); // Starting game by clicking the start button