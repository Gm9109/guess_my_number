'use strict';
// Déclaration des variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;
document.querySelector(".highscore").textContent = localStorage.getItem("highscore") || 0;
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

// Fonctions
const gameOver = () => {
  document.querySelector('.message').textContent = 'You lose';
  document.querySelector('.score').textContent = 0;
};


document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('Type a number'); // Lorsque le champ est vide
  } else if (guess === secretNumber) {
    // Victoire
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      // Nouveau record ?
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      localStorage.setItem("highscore", highScore);
    }
  } else if (guess < secretNumber) {
    // Estimation trop basse
    if (score > 1) {
        displayMessage('Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // Stop lorsque le score est épuisé
      gameOver();
    }
  } else if (guess > secretNumber)
    if (score > 1) {
      // Estimation trop haute
      displayMessage('Too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // Stop lorsque le score est épuisé
      gameOver();
    }    
});



// Bouton de réinitialisation

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});



