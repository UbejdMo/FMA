let answer = Math.floor(Math.random() *20) +1;
let playerOne = parseInt(prompt('Player One:'));
let playerTwo = parseInt(prompt('Player Two:'));

if(isNaN(playerOne) || isNaN(playerTwo))
    throw new Error('Please write only numbers');

if((playerOne < 0 || playerOne > 20) || (playerTwo < 0 || playerTwo > 20)){
    throw new Error('Only select numbers between 0 and 20');
}

let playerOneDistance = Math.abs(answer - playerOne);
let playerTwoDistance = Math.abs(answer - playerTwo);
let playerOneScore = document.querySelector('#playerOneScore');
let playerTwoScore = document.querySelector('#playerTwoScore');
let playerOneColor = document.querySelector('.player-one');
let playerTwoColor = document.querySelector('.player-two');

if(playerOneDistance < playerTwoDistance){
    playerOneColor.style.backgroundColor ='green';
    playerTwoColor.style.backgroundColor ='red';}
    
else if(playerOneDistance > playerTwoDistance){
    playerOneColor.style.backgroundColor ='red';
    playerTwoColor.style.backgroundColor ='green';
}
else{
        playerOneColor.style.backgroundColor ='orange';
        playerTwoColor.style.backgroundColor ='orange';
    }

let CorrectAnswer = document.querySelector('#CorrectAnswer');

CorrectAnswer.innerHTML = `The correct answer is ${answer}`;

playerOneScore.innerHTML = ` ${playerOneDistance}`;
playerTwoScore.innerHTML = `${playerTwoDistance}`;

