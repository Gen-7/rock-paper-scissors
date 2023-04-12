const random = ["Rock", "Paper", "Scissors"];

//computer randomly chooses rock, paper, or scissors 
function getComputerChoice() { 
  //get random index value from array
  const index = Math.floor(Math.random() * random.length);
  //choose randomly
  const chosen = random[index];
  return chosen;
}

const computerSelection = getComputerChoice();
const win = "You win!";
const lose = "You lose!";
const tie = "It's a tie!";

//function that plays a round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  //converts strings to lowercase making everything case-insensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  const tie = "It's a tie!";
  console.log(playerSelection);
  console.log(computerSelection);
  //if player chooses rock
  if(playerSelection == "rock") {
    if(computerSelection == "rock") {
      return tie;
    }
    else if(computerSelection == "scissors") {
      return win + " Rock beats Scissors";
    }
    else {
      return lose + " Paper beats Rock";
    }
  }
  //if player chooses paper
  if(playerSelection == "paper") {
    if(computerSelection == "paper") {
      return tie;
    }
    else if(computerSelection == "rock") {
      return win + " Paper beats Rock";
    }
    else {
      return lose + " Scissors beats Paper";
    }
  }
  //if player chooses scissors
  if(playerSelection == "scissors") {
    if(computerSelection == "scissors") {
      return tie;
    }
    else if(computerSelection == "paper") {
      return win + " Scissors beats Paper";
    }
    else {
      return lose + " Rock beast Scissors";
    }
  }
}

//function that plays a 5 round game
function game() {
  let rounds;
  let wins = 0, losses = 0, ties = 0;
  for(let i = 0; i <= 4; i++) {
    let playerSelection = prompt("Enter rock, paper, or scissors: ")
    rounds = playRound(playerSelection, computerSelection);
    console.log(rounds);
    if(rounds == win) {
      wins++;
    }
    else if(rounds == lose) {
      losses++;
    }
    else {
      ties++;
    }
  }
  if(wins > losses) {
    return "Congratulations! You won!";
  }
  else if(losses > wins) {
    return "Sorry! You lost!";
  }
  else if(wins == losses) {
    return "You tied! Try again!";
  }
}

//plays the game
console.log(game());