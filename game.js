let playerScore = 0;
let computerScore = 0;

// Cache the DOM
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

const winner_div = document.getElementById('winner');
const instructions_div = document.getElementById('instructions');

// Generate computer selection: Based on random number, assign Rock, Paper or Scissors.
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    // Generate a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// What to if player wins
function playerWins(playerChoice, computerChoice) {
    playerScore++;
    // Update scoreboard
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${playerChoice}😁 beats ${computerChoice}💻.`;
}

// What to do if computer wins
function computerWins(playerChoice, computerChoice) {
    computerScore++;
    // Update scoreboard
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice}💻 beats ${playerChoice}🥺.`;
}

// What to do if it's a tie
function tie(playerChoice, computerChoice) {
    result_p.innerHTML = `${playerChoice}😐 ties with ${computerChoice}💻.`;
}

// Checks if game is over
function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    }
    return false;
}

// Determines winner of the game
function announceWinner() {
    if (playerScore === 5) {
        winner_div.innerHTML = `You win! 🥳 Reload page to play again.`;
    } else if (computerScore === 5) {
        winner_div.innerHTML = `Computer wins. 💻 Reload page to play again.`;
    }
}

function hideInstructions() {
    instructions_div.style.visibility = 'hidden';
}

// Determines winner of the round
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    
    switch (playerChoice + computerChoice) {
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            playerWins(playerChoice, computerChoice);
            break;
        case 'RockPaper':
        case 'ScissorsRock':
        case 'PaperScissors':
            computerWins(playerChoice, computerChoice);
            break;
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            tie(playerChoice, computerChoice);
            break;
    }

    if (isGameOver) {
        hideInstructions();
        announceWinner();        
    }    
}

// Adds event listener to the clicking of player's three choices
function main() {

    rock_div.addEventListener('click', function() {
        game('Rock');
    })

    paper_div.addEventListener('click', function() {
        game('Paper');
    })

    scissors_div.addEventListener('click', function() {
        game('Scissors');
    })

}

main();

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

console.log(game());
*/