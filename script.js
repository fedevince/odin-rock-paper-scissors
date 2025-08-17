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