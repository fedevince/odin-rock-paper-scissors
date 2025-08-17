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
    let humanChoice = prompt("Pick rock, paper or scissors.");
    while (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        humanChoice = prompt("Please enter a valid option ");
    }
    return humanChoice;
}