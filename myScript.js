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
const playerSelection = prompt("Enter rock, paper, or scissors: ")

//function that plays a round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  //converts strings to lowercase making everything case-insensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);
  //if player chooses rock
  if(playerSelection == "rock") {
    if(computerSelection == "rock") {
      return "It's a tie!";
    }
    else if(computerSelection == "scissors") {
      return "You Win! Rock beats Scissors";
    }
    else {
      return "You Lose! Paper beats Rock";
    }
  }
  //if player chooses paper
  if(playerSelection == "paper") {
    if(computerSelection == "paper") {
      return "It's a tie!";
    }
    else if(computerSelection == "rock") {
      return "You Win! Paper beats Rock";
    }
    else {
      return "You Lose! Scissors beats Paper";
    }
  }
  //if player chooses scissors
  if(playerSelection == "scissors") {
    if(computerSelection == "scissors") {
      return "It's a tie!";
    }
    else if(computerSelection == "paper") {
      return "You Win! Scissors beats Paper";
    }
    else {
      return "You Lose! Rock beats Scissors";
    }
  }
}

console.log(playRound(playerSelection, computerSelection));
