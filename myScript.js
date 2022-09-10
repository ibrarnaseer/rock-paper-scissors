// Array of choices computer can make
let computerChoice = ["Rock", "Paper", "Scissors"]
// Function to choose a weapon randomly from array
function getComputerChoice() {
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

// Function to play one round, taking into account what computer chose, and what the player picked
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie. Try again.");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer chose paper. You lost.");
        return computerScore = computerScore + 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Computer chose scissors. You won!");
        return playerScore = playerScore + 1;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Computer chose scissors. You lost.");
        return computerScore = computerScore + 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Computer chose rock. You won!");
        return playerScore = playerScore + 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Computer chose rock. You lost.");
        return computerScore = computerScore + 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Computer chose paper. You won!");
        return playerScore = playerScore + 1;
    } else if (playerSelection !== "Rock" || playerSelection !== "Paper" || playerSelection !== "Scissors") {
        console.log("Invalid choice. Computer gets a point.");
        return computerScore = computerScore + 1;
    }
}

// Function to play a game of five rounds
function game() {
    for (i = 0; i < 5; i++) {
        const playerInput = prompt("Pick your weapon");
        const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
        // Keeping score of points in between rounds
        console.log("Current score is: \nPlayer = " + playerScore + "\nComputer = " + computerScore);
    }
}

// To keep track of score for computer and player
let computerScore = 0;
let playerScore = 0;
// Let player know score each round, and what computer chose that round
console.log(game());

// If else statement to let player know who won the GAME, not round(s)
if (playerScore == computerScore) {
    console.log("It's a tie game!");
} else if (playerScore > computerScore) {
    console.log("Congratulations. You won the game!");
} else if (playerScore < computerScore) {
    console.log("You lost the game.");
}