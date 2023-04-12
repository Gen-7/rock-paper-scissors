//Start with function getComputerChoice
//getComputerChoice randomly returns either 'Rock', 'Paper', or 'Scissors'
const random = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
  //get index value from random
  const index = Math.floor(Math.random() * random.length);
  //choose random
  const chosen = random[index];
  return chosen;
}
 
console.log(getComputerChoice());
//function that plays a single round of RPS
//function should take 2 parameters: playerSelection and computerSelection
//function returns a string that declares the winner of the round
//make playerSelection cas-insensitive