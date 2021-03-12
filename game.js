// Generate computerSelection
function computerPlay() {
// Generate a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3);
    let choice;
    // Based on random number, assign Rock, Paper or Scissors.
    if (randomNumber === 1) {
        choice = 'Rock';
    } else if (randomNumber === 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
    return choice;
}

// Helper function to convert a string to title case
function titleCase(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

// COLLECT PLAYER'S CHOICE

/*
// Get an node list of every single element that matches
const buttons = document.querySelectorAll('.button');

// Each key gets an event listener, click, added to it.
// Passes button value to displayButton function
buttons.forEach(button => button.addEventListener('click', displayButton));
*/

document.getElementById('btn-rock').addEventListener('click', displayButton);

function displayButton() {
    document.getElementById('demo').innerHTML = 'You chose rock';
}

function collectPlayerChoice(buttonChoice) {
    let initialChoice = prompt('What do you choose: Rock, Paper or Scissors?');
    let choice = titleCase(initialChoice);
    return choice;     
}

// Plays single round of Paper-Rock-Scissors
// Return a string that declares the winner of the round (Ex: "You Lose! Paper beats Rock.")
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'Tie! Play again.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'Tie! Play again.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'Tie! Play again.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper.';
    }
}

/*
// Plays a 5-round game 
// Displays the results of each round, keeps score and reports a winner or loser at the end.
function game() {
    // Initialize win counts of player, computer and ties
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tieCount = 0;
        
    // Play game 5 times
    for (let counter = 0; counter < 5; counter++) {

        // Gather and output player's choice
        const playerSelection = collectPlayerChoice();
        console.log('Player selection: ' + playerSelection);            
        // Gather and output computer's choice
        const computerSelection = computerPlay();
        console.log('Computer selection: ' + computerSelection);
        
        // Play the game, output the winner and save outcome to variable
        const outcome = playRound(playerSelection, computerSelection);
        console.log(outcome);
        
        // If outcome is a tie, decrement counter so that another round is played.
        // Otherwise, count who wins.
        if (outcome === 'Tie! Play again.') {
            counter--;
            tieCount++;
        } else if (outcome === 'You win! Rock beats Scissors.' || 
        outcome === 'You win! Paper beats Rock.' ||
        outcome === 'You win! Scissors beats Paper.') {
            playerWinCount++;
        } else if (outcome === 'You lose! Paper beats Rock.' || 
        outcome === 'You lose! Scissors beats Paper.' || 
        outcome === 'You lose! Rock beats Scissors.') {
            computerWinCount++;
        } 
    }

    // Return final winner
    if (playerWinCount > computerWinCount) {
        return `The final count: Player ${playerWinCount}, Computer ${computerWinCount}, Ties ${tieCount}. You won the game!`;
    } else if (computerWinCount > playerWinCount) {
        return `The final count: Computer ${computerWinCount}, Player ${playerWinCount}, Ties ${tieCount}. The computer won the game.`;
    }
}
*/

console.log(game());