let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0, losses: 0, tie: 0
};

/*if(!score) {
score = {
  wins: 0, losses: 0, tie: 0
};
}*/
updateScoreElement();

let result = '';
function playGame(playerMove) {
const computerMove = pickComputerMove();

if(playerMove === 'Scissors') {
    if(computerMove === 'Rock') {
    result = 'You Lose';
  } else if (computerMove === 'Paper') {
    result = 'You Win';
  } else if (computerMove === 'Scissors') {
    result = 'Tie';
  }
  
} else if(playerMove === 'Paper') {
    if(computerMove === 'Rock') {
    result = 'You Win';
  } else if (computerMove === 'Paper') {
    result = 'Tie';
  } else if (computerMove === 'Scissors') {
    result = 'You Lose';
  }
  
} else if (playerMove === 'Rock') {
    if(computerMove === 'Rock') {
    result = 'Tie';
  } else if (computerMove === 'Paper') {
    result = 'You Lose';
  } else if (computerMove === 'Scissors') {
    result = 'You Win';
  }

}

if(result === 'You Win'){
  score.wins += 1;
} else if(result === 'You Lose') {
  score.losses += 1;
} else if(result === 'Tie') {
  score.tie += 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You choose <img src="images/${playerMove}-emoji.png" class="move-icon">. Computer choose <img src = "images/${computerMove}-emoji.png" class="move-icon"> `

}
function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.tie}`;
}

function pickComputerMove() {
const randomNum = Math.random();
let computerMove = '';
if(randomNum >= 0 && randomNum < 1/3){
  computerMove = 'Rock';
} else if(randomNum >= 1/3 && randomNum <2/3){
  computerMove = 'Paper';
} else if(randomNum >= 2/3 && randomNum < 1){
  computerMove = 'Scissors';
}
return computerMove;
}