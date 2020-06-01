/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, prevDice;

const init = () => {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".second-dice").style.display = "none";
  document.querySelector(".btn-roll").style.display = "block";
  document.querySelector(".btn-hold").style.display = "block";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
};
init();

document.querySelector(".btn-roll").addEventListener("click",  () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  let secondDice = Math.floor(Math.random() * 6)+1;

  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  let secondDiceDOM = document.querySelector(".second-dice");
  secondDiceDOM.style.display = "block";
  secondDiceDOM.src = "dice-" + secondDice + ".png";
  
  
  // if (dice === 6) {
  //   if (prevDice === 6) {
  //     nextPlayer();
  //   }
  //   prevDice = dice;
  // }

  if (dice !== 1 && secondDice !==1) {
    //add score
    roundScore = roundScore + dice + secondDice;

    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //next player
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click",  () => {
  //add to current score to global score
  scores[activePlayer] += roundScore;

  //update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

    let winningScore
    let input = document.getElementById('input').value;
  if (input) {
     winningScore = input;
  } else {
    winningScore = 100;
  }

  //check if player won the game
  if (scores[activePlayer] >= winningScore ) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".second-dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    document.querySelector(".btn-roll").style.display = "none";
    document.querySelector(".btn-hold").style.display = "none";
    document.querySelector('#input').style.display = "none";
  } else {
    nextPlayer();
  }
  document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
});

const nextPlayer = () => {
  //next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // if(activePlayer === 0) {
  //     activePlayer = 1;
  // }else {
  //     activePlayer = 0;
  // }
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
      
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".second-dice").style.display = "none";
};

document.querySelector(".btn-new").addEventListener("click", init);

 


// let playerName = document.getElementById("name-0");
// playerName = document.getElementById("input-name-0").value;

// const input = document.querySelector('.input-name-' + activePlayer);

// input.addEventListener('click', function () {
//   const name = document.querySelector('.name-' + activePlayer);
//   name.textContent = input;
// });

//
// btn();
