var maxScoreLabel = document.querySelector('#maxScore');
var input = document.querySelector('input');
var buttonOne = document.querySelector('.playerOne');
var buttonTwo = document.querySelector('.playerTwo');
var buttonReset = document.querySelector('.reset');
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
});

buttonOne.addEventListener('click', function() {
    addScore(0);
});

buttonTwo.addEventListener('click', function() {
    addScore(1);
});

buttonReset.addEventListener('click', function() {
    players.forEach(function(element) {
        element.score = 0;
        element.label.textContent = 0;
        element.label.style.color = 'black';
    });
});

function addScore(playerIndex) {
    if (players[0].score < maxGame && players[1].score < maxGame) {
        players[playerIndex].score += 1;
        players[playerIndex].label.textContent = players[playerIndex].score;
    }
    if (players[playerIndex].score >= maxGame) {
        players[playerIndex].label.style.color = 'green';
    }
}