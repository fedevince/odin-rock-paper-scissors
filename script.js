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
        console.log("Draw")
    } else {
        if (humanSelection === 'rock' ) {
            if (computerSelection === 'scissors'){
                console.log(`You won, ${humanSelection} beats ${computerSelection}`)
                return "human"
            } else {
                console.log(`You lost, ${computerSelection} beats ${humanSelection}`)
                return "computer"
            }
        } else if (humanSelection === "paper") {
            if (computerSelection === "rock"){
                console.log(`You won, ${humanSelection} beats ${computerSelection}`)
                return "human"
            } else {
                console.log(`You lost, ${computerSelection} beats ${humanSelection}`)
                return "computer"
            } 
        } else {
            if (computerSelection=== "paper"){
                console.log(`You won, ${humanSelection} beats ${computerSelection}`)
                return "human"
            } else {
                console.log(`You lost, ${computerSelection} beats ${humanSelection}`)
                return "computer"
            }
        }
    }
}

//playRound(computerSelection,humanSelection)

// Logic to play entire game
// Declare score int variables
// Get computer and player choice into string variables
// call playround() five times
// function playGame() {
//     let computerScore = 0;
//     let humanScore = 0;

//     for (let i = 0; i < 5;i++) {
//         const computerSelection = getComputerChoice();
//         const humanSelection = getHumanChoice();
//         let roundWinner = playRound(computerSelection, humanSelection);
//         if (roundWinner === "human"){
//             humanScore++;
//         } else if (roundWinner === "computer") {
//             computerScore++;
//         }
//         console.log(`Current score: Human ${humanScore}: Computer ${computerScore}`)
//         }
//     console.log(`Final score: Human ${humanScore}: Computer ${computerScore}`)
//     }

//playGame()