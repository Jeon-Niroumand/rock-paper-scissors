var items = ['rock','paper','scissors'];
let computerSelection = computerPlay(items);

function computerPlay(items) {  //computer picks rock, paper or scissors randomly
    return items[Math.floor(Math.random()*items.length)];

}

let win = 0, //initialize the variables used in playRound()
    lose = 0,
    draw = 0;

function playRound(playerSelection,computerSelection) { //win, lose, draw logic per round.
    if (playerSelection == computerSelection)
        return draw++,`It's a tie!`;
    else if(playerSelection == `rock` & computerSelection == `scissors`)
        return win++,`You win! ${playerSelection} beats ${computerSelection}!`;
    else if(playerSelection == `paper` & computerSelection == `rock`)
        return win++,`You win! ${playerSelection} beats ${computerSelection}!`;
    else if (playerSelection == `scissors` & computerSelection == `paper`)
        return win++,`You win! ${playerSelection} beats ${computerSelection}!`;
    else
        return lose++,`You lose! ${computerSelection} beats ${playerSelection}!`;

}

function results() { //game result logic, tallies win, lose, draw and prints winner(s)
    if (win == lose)
        return `It's a tie! You won ${win} rounds, lost ${lose} rounds, and tied ${draw} rounds`;
    else if (win > lose)
        return `You win! You won ${win} rounds, lost ${lose} rounds, and tied ${draw} rounds`;
    else
        return `You lose! You won ${win} round, lost ${lose} rounds, and tied ${draw} rounds`;

}

let round = 0;
function game() { //plays 1 round of rock-paper-scissors
    let rounds = 5; //change the number of rounds here
    if (round < rounds) round++; 
    else throw 'GAME OVER';
    computerSelection = computerPlay(items);
    resultWindow.innerHTML += `ROUND ${round} RESULTS:<br/>You chose ${playerSelection} and the computer chose ${computerSelection}<br/>${playRound(playerSelection, computerSelection)}<br/><br/>`;
    if (round === rounds) return resultWindow.innerHTML += `***************FINAL RESULTS***************<br/>${results()}`;
}

const rock = document.getElementById("rock");
rock.addEventListener("click", myRock);

function myRock() {
    playerSelection = "rock";
    game()

}

const paper = document.getElementById("paper");
paper.addEventListener("click", myPaper);

function myPaper() {
    playerSelection = "paper";
    game()
    
}

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", myScissors);

function myScissors() {
    playerSelection = "scissors";
    game()

}