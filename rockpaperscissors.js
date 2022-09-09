var items = ['rock','paper','scissors'];
const computerSelection = computerPlay(items);

function computerPlay(items)  //computer picks rock,paper or scissors randomly
{

return items[Math.floor(Math.random()*items.length)];

}

let win = 0, //initialize the variables used in playRound()
    lose = 0,
    draw = 0;

function playRound(playerSelection,computerSelection) //win,lose,draw logic per round.
{

if (playerSelection == computerSelection)
    return draw++,`It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}`;
else if(playerSelection == `rock` & computerSelection == `scissors`)
    return win++,`You win! ${playerSelection} beats ${computerSelection}!`;
else if(playerSelection == `paper` & computerSelection == `rock`)
    return win++,`You win! ${playerSelection} beats ${computerSelection}!`;
else if (playerSelection == `scissors` & computerSelection == `paper`)
    return win++,`You win! ${playerSelection} beats ${computerSelection}!`;
else
    return lose++,`you Lose! ${computerSelection} beats ${playerSelection}!`;

}

function results() //game result logic, tallies win, lose, draw and prints winner(s)
{

if (win == lose)
    return `It's a tie! You won ${win} rounds, lost ${lose} rounds, and tied ${draw} rounds`;
else if (win > lose)
    return `You win! You won ${win} rounds, lost ${lose} rounds, and tied ${draw} rounds`;
else
    return `You lose! You won ${win} round, lost ${lose} rounds, and tied ${draw} rounds`;

}

function game() //plays 1 round of rock-paper-scissors
{

const playerSelection = prompt("Type: rock, paper or scissors to play and press enter (best of 5 rounds wins)");
console.log(`ROUND ${round} RESULTS:`)
console.log(`You chose ${playerSelection.toLowerCase()}`);
const computerSelection = computerPlay(items);
console.log(`The computer chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));

}

let round = 1;
for (round; round < 1; round++) //play 5 rounds and increment win.lose,draw vars.
{
game()

}

console.log(`***********************FINAL RESULTS***********************`)
console.log(results());