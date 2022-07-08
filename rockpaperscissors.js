const playerSelection = prompt("Type: Rock, Paper or Scissors to play and press enter");
console.log(`You chose ${playerSelection.toLowerCase()}`);

var items = ['rock','paper','scissors'];
var computerSelection = computerPlay(items);

function playRound(playerSelection,computerSelection)
{

if (playerSelection == computerSelection)
return "It's a tie!";
else if(playerSelection == 'rock' & computerSelection == 'scissors')
return "You win!";
else if(playerSelection == 'paper' & computerSelection == 'rock')
return "You win!";
else if (playerSelection == 'scissors' & computerSelection == 'paper')
return "You win!";
else
return "You Lose!";

}

function computerPlay(items)  //computer picks rock,paper or scissors randomly
{

return items[Math.floor(Math.random()*items.length)];

}



console.log(computerSelection);