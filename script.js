// variable declaration
const playerChoice = document.getElementsByClassName('player');
const playerSide = document.getElementsByClassName('player-side');

const stringScoreX = document.getElementById('score-X');
let scoreX = parseInt(stringScoreX.textContent, 10) || 0;

const stringScoreO = document.getElementById('score-O');
let scoreO = parseInt(stringScoreO.textContent, 10) || 0;

const cells = document.querySelectorAll('[data-cell]');

const restartButton = document.querySelector('.restart-button');

const valueX = 'X';
const valueO = 'O';
const noValue = '';
let coopValue = 'X';

let gameIsOver = false;

// function declaration
function win(){
     // player value X
     if (cells[0].textContent === valueX && 
          cells[1].textContent === valueX && 
          cells[2].textContent === valueX){
               gameIsOver = true;
               console.log('Player X win');
               scoreX++;
               stringScoreX.textContent = scoreX.toString();
               return;
     }
     if (cells[3].textContent === valueX && 
          cells[4].textContent === valueX && 
          cells[5].textContent === valueX){
               gameIsOver = true;
               console.log('Player X win');
               scoreX++;
               stringScoreX.textContent = scoreX.toString();
               return;
     }
     if (cells[6].textContent === valueX && 
          cells[7].textContent === valueX && 
          cells[8].textContent === valueX){
               gameIsOver = true;
               console.log('Player X win');
               scoreX++;
               stringScoreX.textContent = scoreX.toString();
               return;
     }
     if (cells[0].textContent === valueX && 
          cells[3].textContent === valueX && 
          cells[6].textContent === valueX){
               gameIsOver = true;
               console.log('Player X win');
               scoreX++;
               stringScoreX.textContent = scoreX.toString();
               return;
     }
     if (cells[1].textContent === valueX && 
          cells[4].textContent === valueX && 
          cells[7].textContent === valueX){
               gameIsOver = true;
               console.log('Player X win');
               scoreX++;
               stringScoreX.textContent = scoreX.toString();
               return;
     }
     if (cells[2].textContent === valueX && 
          cells[5].textContent === valueX && 
          cells[8].textContent === valueX){
               gameIsOver = true;
               console.log('Player X win');
               scoreX++;
               stringScoreX.textContent = scoreX.toString();
               return;
     }
     if (cells[0].textContent === valueX && 
          cells[4].textContent === valueX && 
          cells[8].textContent === valueX){
               gameIsOver = true;
               console.log('Player X win');
               scoreX++;
               stringScoreX.textContent = scoreX.toString();
               return;
     }
     if (cells[2].textContent === valueX && 
          cells[4].textContent === valueX && 
          cells[6].textContent === valueX){
               gameIsOver = true;
               console.log('Player X win');
               scoreX++;
               stringScoreX.textContent = scoreX.toString();
               return;
     }

     // player value O
     if (cells[0].textContent === valueO && 
          cells[1].textContent === valueO && 
          cells[2].textContent === valueO){
               gameIsOver = true;
               console.log('Player O Win');
               scoreO++;
               stringScoreO.textContent = scoreO.toString();
               return;
     }
     if (cells[3].textContent === valueO && 
          cells[4].textContent === valueO && 
          cells[5].textContent === valueO){
               gameIsOver = true;
               console.log('Player O Win');
               scoreO++;
               stringScoreO.textContent = scoreO.toString();
               return;
     }
     if (cells[6].textContent === valueO && 
          cells[7].textContent === valueO && 
          cells[8].textContent === valueO){
               gameIsOver = true;
               console.log('Player O Win');
               scoreO++;
               stringScoreO.textContent = scoreO.toString();
               return;
     }
     if (cells[0].textContent === valueO && 
          cells[3].textContent === valueO && 
          cells[6].textContent === valueO){
               gameIsOver = true;
               console.log('Player O Win');
               scoreO++;
               stringScoreO.textContent = scoreO.toString();
               return;
     }
     if (cells[1].textContent === valueO && 
          cells[4].textContent === valueO && 
          cells[7].textContent === valueO){
               gameIsOver = true;
               console.log('Player O Win');
               scoreO++;
               stringScoreO.textContent = scoreO.toString();
               return;
     }
     if (cells[2].textContent === valueO && 
          cells[5].textContent === valueO && 
          cells[8].textContent === valueO){
               gameIsOver = true;
               console.log('Player O Win');
               scoreO++;
               stringScoreO.textContent = scoreO.toString();
               return;
     }
     if (cells[0].textContent === valueO && 
          cells[4].textContent === valueO && 
          cells[8].textContent === valueO){
               gameIsOver = true;
               console.log('Player O Win');
               scoreO++;
               stringScoreO.textContent = scoreO.toString();
               return;
     }
     if (cells[2].textContent === valueO && 
          cells[4].textContent === valueO && 
          cells[6].textContent === valueO){
               gameIsOver = true;
               console.log('Player O Win');
               scoreO++;
               stringScoreO.textContent = scoreO.toString();
               return;
     }
}git 

function checkGameStatus() {
     win();
     if (gameIsOver){
          return;
     }

     // draw
     let isDraw = true;
     for (let i=0; i<cells.length; i++){
          if (cells[i].textContent === noValue){
               isDraw = false;
               break;
          }
     }
     if (isDraw){
          gameIsOver = true;
          console.log('Game Draw');
          return;
     }
}

function computerO() {
     if (gameIsOver) {
          return;
     }

     let index;
     do {
          index = Math.floor(Math.random() * 9);
     } while (cells[index].textContent !== noValue);

     cells[index].textContent = valueO;

     checkGameStatus();
}

function computerX() {
     if (gameIsOver) {
          return;
     }

     let index;
     do {
          index = Math.floor(Math.random() * 9);
     } while (cells[index].textContent !== noValue);

     cells[index].textContent = valueX;

     checkGameStatus();
}

// action
// player X
playerChoice[0].addEventListener('click', () => {
     playerChoice[0].classList.toggle('player-side', true);
     playerChoice[1].classList.remove('player-side');
     playerChoice[2].classList.remove('player-side')

     cells.forEach(e => {
          e.textContent = noValue;
     });
     gameIsOver = false;
})

// co-op
playerChoice[1].addEventListener('click', () => {
     playerChoice[1].classList.toggle('player-side', true);
     playerChoice[0].classList.remove('player-side');
     playerChoice[2].classList.remove('player-side');

     cells.forEach(e => {
          e.textContent = noValue;
     });
     gameIsOver = false;
})

// player O
playerChoice[2].addEventListener('click', () => {
     playerChoice[2].classList.toggle('player-side', true);
     playerChoice[1].classList.remove('player-side');
     playerChoice[0].classList.remove('player-side');

     cells.forEach(e => {
          e.textContent = noValue;
     });
     gameIsOver = false;

     computerX();
})


cells.forEach((e) => {
     e.addEventListener('click', () => {
          // player X
          if (playerSide[0] === playerChoice[0]) {
               if (gameIsOver || e.textContent !== noValue) {
                    return;
               }
     
               e.textContent = valueX;
               checkGameStatus();
     
               if (!gameIsOver) {
                    computerO();
               }
          }

          // Co-op
          if (playerSide[0] === playerChoice[1]) {
               if (gameIsOver || e.textContent !== noValue) {
                    return;
               }
     
               e.textContent = coopValue;
               coopValue = coopValue === 'X' ? 'O' : 'X';

               checkGameStatus();
          }

          // player O
          if (playerSide[0] === playerChoice[2]) {
               if (gameIsOver || e.textContent !== noValue) {
                    return;
               }

               e.textContent = valueO;
               checkGameStatus();
     
               if (!gameIsOver) {
                    computerX();
               }
          }

     });
});

restartButton.addEventListener('click', () => {
     cells.forEach(e => {
          e.textContent = noValue;
     });

     gameIsOver = false;

     if (playerSide[0] === playerChoice[2]) {
          computerX();
     }
});