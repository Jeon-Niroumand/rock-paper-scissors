var items = ['rock','paper','scissors'];
const computerSelection = computerPlay(items);

function computerPlay(items)  //computer picks rock,paper or scissors randomly
{

return items[Math.floor(Math.random()*items.length)];

}

function playRound(playerSelection,computerSelection) //win,lose,draw logic
{

if (playerSelection == computerSelection)
return `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}`;
else if(playerSelection == `rock` & computerSelection == `scissors`)
return `You win! ${playerSelection} beats ${computerSelection}!`;
else if(playerSelection == `paper` & computerSelection == `rock`)
return `You win! ${playerSelection} beats ${computerSelection}!`;
else if (playerSelection == `scissors` & computerSelection == `paper`)
return `You win! ${playerSelection} beats ${computerSelection}!`;
else
return `you Lose! ${computerSelection} beats ${playerSelection}!`;

}

function game()
{

const playerSelection = prompt("Type: Rock, Paper or Scissors to play and press enter");
console.log(`You chose ${playerSelection.toLowerCase()}`);
const computerSelection = computerPlay(items);
console.log(`The computer chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));

}