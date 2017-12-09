var maxScoreLabel = document.querySelector('#maxScore');
var input = document.querySelector('input');
var buttonsOne = document.querySelector('.playerOne');
var buttonsTwo = document.querySelector('.playerTwo');
var buttons = document.querySelectorAll('button');
var maxGame = 5;

var players = [{
    playerName: "#playerOne",
    score: 0
  },
  {
    playerName: "#playerTwo",
    score: 0
  }
];
maxScoreLabel.textContent = maxGame;

buttons.addEventListener('click', function() {
  alert('tes');
});

// buttonsOne.addEventListener('click',function() {
//     if (players[0].score < maxGame){
//       players[0].score+=1;
//       document.querySelector(players[0].playerName).textContent = players[0].score;
//     }
//   });
//
//   buttonsTwo.addEventListener('click',function() {
//       if (players[1].score < maxGame){
//         players[1].score+=1;
//         document.querySelector(players[1].playerName).textContent = players[1].score;
//       }
//     });
