'use strict';
// Selecting the elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollingTheDice = document.querySelector('.btn--roll');
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--new');
// Variables for our game
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

// Function to roll the dice and the set the image according to the number we get while rolling the dice
const diceRoll = function(){
    if (playing) {
        const diceNumber = Math.trunc(Math.random() * 7);
        if (diceNumber == 0){
            diceRoll();
        }else{
            dice.classList.remove('hidden');
            dice.src = `dice-${diceNumber}.png`;
            if (diceNumber !== 1) {
                currentScore += diceNumber;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            }else{
                document.getElementById(`current--${activePlayer}`).textContent = 0;
                activePlayer = activePlayer === 0 ? 1 : 0;
                currentScore = 0;
                player0Element.classList.toggle('player--active');
                player1Element.classList.toggle('player--active');
            }
        }
    }
}
// Function to hold the scores
const holdScores = function(){
    if (playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dice.classList.add('hidden');
        }else{
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            currentScore = 0;
            player0Element.classList.toggle('player--active');
            player1Element.classList.toggle('player--active');
        }
    }
}
// Function to reset the game
const resetGame = function(){
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    dice.classList.add('hidden');
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
    
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    dice.classList.add('hidden');

    let currentScore = 0;
    let activePlayer = 0;
    const scores = [0, 0];
    let playing = true;
}


score0Element.textContent = 0;
score1Element.textContent = 0;
dice.classList.add('hidden');
rollingTheDice.addEventListener('click', diceRoll);
btnHold.addEventListener('click', holdScores);
btnReset.addEventListener('click', resetGame);


