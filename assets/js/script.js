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

// When the page loads, initialize the game 
window.addEventListener("DOMContentLoaded", function() {
  resetGame();                          // Setup and shuffle cards, start timer
  restartButton.addEventListener("click", resetGame); 
});

/**
 * Flip a card and reveal its assigned icon
*/
function flipCard(card) {
card.innerHTML = card.dataset.icon; 
}

/**
 Flips the cards back to a question mark if they don't match
*/
function unflipCards() {
  flippedCards.forEach(function(card) {
    card.innerHTML = '<i class="fa-solid fa-question"></i>'; // Show the question mark again
  });
  flippedCards = []; // reset value back to 0
}

/**
 Checks if the two flipped cards match
*/
function checkMatch() {
  const [card1, card2] = flippedCards; 
 // if both cards match, they will be marked as matched
  if (card1.dataset.icon === card2.dataset.icon ) {
     card1.classList.add("matched"); 
    card2.classList.add("matched"); 
    flippedCards = []; // Reset flipped cards
     matchedPairs++; // Increment matched pairs count since it has matched, once all matched pairs are matched the game finishes
  
     // If all pairs have been matched, stop the timer as the game has finished & show a win message
     if (matchedPairs === cards.length / 2) {
      clearInterval(timerInterval);
      message.textContent = `You won in ${timer} seconds!`;
     }
  } else {
      setTimeout(unflipCards, 1000); // if they dont match, flip them back after 1 second and continue game.
     }
    }
    

/**
 *Deals with any card that is clicked
 */
function handleCardClick(e) {
let card = e.currentTarget;
 if (
    card.classList.contains("matched") ||flippedCards.length >= 2 || flippedCards.includes(card)
  ){
    return false;
  } 
flipCard(card);
  flippedCards.push(card);
  if (flippedCards.length === 2) { checkMatch(); 
  }
}

/**
 * Resets the game 
 */
function resetGame() {
  clearInterval(timerInterval); // stop the timer
  timer = 0;                    // reset timer value
  matchedPairs = 0;             // reset matched pairs count
  flippedCards = [];            // clear any flipped cards
  message.textContent = "";    // clear message
  timerDisplay.textContent = "0"; // Reset timer display
  
  
  cards = Array.from(document.querySelectorAll(".card"));
 cards.sort(() => Math.random() -0.5 );  // shuffle the cards randomly
 
  //clear the board for new game:
 cards.forEach(function(card) {
  board.appendChild(card); 
  card.innerHTML = '<i class="fa-solid fa-question"></i>';
card.classList.remove ("matched");
card.removeEventListener("click", handleCardClick);
card.addEventListener("click", handleCardClick);
  });

  // restart timer when game restarts

  timerInterval = setInterval(function() {
  timer = timer + 1;
  timerDisplay.textContent=timer;
  }
  ,1000);}