let computerChoice = ["Rock", "Paper", "Scissors"]
function getComputerChoice() {
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie. Try again.");
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer chose paper. You lost.");
        return result - 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Computer chose scissors. You won!");
        return result + 1;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Computer chose scissors. You lost.");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Computer chose rock. You won!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Computer chose rock. You lost.");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Computer chose paper. You won!");
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        const playerInput = prompt("Pick your weapon");
        const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
        console.log(result);
    }
}
let result = 0;
console.log(game());