// get computer choice: provides a random choice between rock paper and scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// get human choice:
// create string variable to human choice
// ask user for choice
// loop to validate choice
function getHumanChoice(){
    let humanChoice = prompt("Pick rock, paper or scissors.").toLowerCase();
    while (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        humanChoice = prompt("Please enter a valid option ");
    }
    return humanChoice;
}

let computerScore = 0;
let humanScore = 0;

// play round:
// get computer and human choice and save them as string variables
// ensure human choice is lower case
// function play round with the two choices as parameters
// round logic: if equal draw, three if options for each human choice
// increment score for winner of the round
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {
        return "Draw";
    }
}


