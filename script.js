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

// play round:
// get computer and human choice and save them as string variables
// ensure human choice is lower case
// function play round with the two choices as parameters
// round logic: if equal draw, three if options for each human choice
// increment score for winner of the round

//function plays round and returns winner
function playRound(computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {
        return ("draw")
    } else {
        if (humanSelection === 'rock' ) {
            if (computerSelection === 'scissors'){
                return "human"
            } else {
                return "computer"
            }
        } else if (humanSelection === "paper") {
            if (computerSelection === "rock"){
                return "human"
            } else {
                return "computer"
            } 
        } else {
            if (computerSelection=== "paper"){
                return "human"
            } else {
                return "computer"
            }
        }
    }
}

const buttons = document.querySelectorAll("button")
const scoreDiv = document.querySelector(".score")
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

for (option of buttons) {
        option.addEventListener("click", () => 
        {
        let winner = playRound(getComputerChoice(), option.id);
        if (winner === "human")
            {humanScore++} else if (winner === 'computer')
                {computerScore++;} 
        roundsPlayed++;
        if (winner != 'draw') 
            {scoreDiv.textContent = `The ${winner} won this round!`} else {
                scoreDiv.textContent = `Draw`
            }

        scoreDiv.textContent += `\nTotal rounds played: ${roundsPlayed}.\nCurrent score: player: ${humanScore}: computer ${computerScore}`
        if (roundsPlayed === 5) {
            scoreDiv.textContent = "GAME OVER! ";
            if (humanScore > computerScore) {
                scoreDiv.textContent += "CONGRATULATIONS, YOU WON! 🥇"
            } else if (computerScore > humanScore) {
                scoreDiv.textContent += "SORRY, YOU LOST 😞"
            } else {
                scoreDiv.textContent += "DRAW, NO ONE WINS"
            }
            roundsPlayed = 0;
            humanScore = 0;
            computerScore = 0;
        }
    }
    ); 
    }



    
    
