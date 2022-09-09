let computerChoice = ["Rock", "Paper", "Scissors"]
function getComputerChoice () {
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}
console.log(getComputerChoice(computerChoice));