var maxScoreLabel = document.querySelector('#maxScore');
var input = document.querySelector('input');
var buttonOne = document.querySelector('.playerOne');
var buttonTwo = document.querySelector('.playerTwo');
var buttonReset = document.querySelector('.reset');
var gameOver = false;
var maxGame = 5;
maxScoreLabel.textContent = maxGame;

var players = [{
    label: document.querySelector('#playerOne'),
    score: 0
}, {
    label: document.querySelector('#playerTwo'),
    score: 0
}];

input.addEventListener('input', function(){
	maxGame = this.value;
	maxScoreLabel.textContent = maxGame;
	reset();
});

buttonOne.addEventListener('click', function() {
    addScore(0);
});

buttonTwo.addEventListener('click', function() {
    addScore(1);
});

buttonReset.addEventListener('click', function() {
    reset();
});

function reset() {
	players.forEach(function(element) {
        element.score = 0;
        element.label.textContent = 0;
        element.label.classList.remove('winner');
    });
    gameOver = false;
}

function addScore(playerIndex) {
    if (!gameOver) {
        players[playerIndex].score += 1;
        players[playerIndex].label.textContent = players[playerIndex].score;
    }
    if (players[playerIndex].score >= maxGame) {
        players[playerIndex].label.classList.add('winner');
        gameOver = true;
    }
}