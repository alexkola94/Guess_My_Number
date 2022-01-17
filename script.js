'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // Where is no input
    if (!guess) {

        displayMessage('No number!')

        // when the player Wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number !');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        //When player is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {

            displayMessage(guess > secretNumber ? 'Too High !' : 'Too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('You lost the game!')
            displayScore(0);
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;


    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing..');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

})