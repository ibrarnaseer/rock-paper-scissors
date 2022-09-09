let computerChoice = ["Rock", "Paper", "Scissors"]
function getComputerChoice() {
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie. Try again.");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer chose paper. You lost.");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Computer chose scissors. You won!");
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
        playRound();
    }
}

const playerInput = prompt("Pick your weapon", "Rock");
const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
const computerSelection = getComputerChoice();

console.log(game());