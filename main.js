// keeping score
let playerScore = 0
let computerScore = 0

// generates a random number from 0-2 and based on that number it will return either 
// 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// store whatever results form the function into a variable
const computerSelecion = computerPlay();

// play a round that takes playerSelection and computerSelecion and declares who the winner is
function playRound(playerSelection, computerSelecion) {

    if (playerSelection === computerSelecion) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelecion === 'scissors') ||
        (playerSelection === 'paper' && computerSelecion === 'rock') ||
        (playerSelection === 'scissors' && computerSelecion === 'paper')
    ) {
        playerScore++
        return `Player Wins!`;
    } else if (
        (playerSelection === 'rock' && computerSelecion === 'paper') ||
        (playerSelection === 'paper' && computerSelecion === 'scissors') ||
        (playerSelection === 'scissors' && computerSelecion === 'rock')
    ) {
        computerScore++
        return `Computer Wins!`;
    }
}

// create a function so it runs a 5 round game 
function game() {
    for (let i = 0; i < 5; i++) {

        // GET input from user using prompt - it will be either rock, paper or scissors
        // ensure input is case-insensitive (users can input rock, ROCK, Rock or any other variations)
        const playerSelection = prompt('Make your selection: Rock, Paper or Scissors').toLowerCase()
        playRound(playerSelection, computerSelecion)
        console.log(`Player's score is ${playerScore} and the Computer's score is ${computerScore}`);
    } 
    
    if (playerScore > computerScore) {
        console.log(`Player has won this round!`)
    } else {
        console.log(`Computer has won this round!`)
    }
}

game()