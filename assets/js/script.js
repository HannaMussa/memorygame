// When the page loads, initialize the game 
window.addEventListener("DOMContentLoaded", function() {
  resetGame();                          // Setup and shuffle cards, start timer
  restartButton.addEventListener("click", resetGame); 
});

// define constants
const board = document.getElementById("game-board");
const message = document.getElementById("message");
const timerDisplay = document.getElementById("timer");
const restartButton = document.getElementById("restart-button");


// define variables
let cards = document.querySelectorAll(".card"); 
let flippedCards= [] 
let matchedPairs = 0
let timer = 0
let timerInterval;

/**
 Flip a card and reveal its assigned icon
*/
function flipCard(card) {
card.innerHTML = card.dataset.value; 
}

function unflipCards() {
}

function checkMatch() {
}

function handleCardClick(e) {
}

function resetGame() {
}
