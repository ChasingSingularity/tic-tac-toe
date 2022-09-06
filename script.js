function getComputerChoice(min = 0, max = 2) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getPlayerChoice() {
    const playerChoice = prompt("Your Move: Rock, Paper, Scissor").toLowerCase();
    switch (playerChoice) {
        case "rock": return 0;
        case "paper": return 1;
        case "scissor": return 2;
        default: return getPlayerChoice();
    };
};

function playRound() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "It's a Tie";
    } else {
        if (playerSelection == 0) {
            switch (computerSelection) {
                case 1: return "You Lose! Paper beats Rock"; break;
                case 2: return "You Win! Rock beats Scissor"; break;
            }
        } else if (playerSelection == 1) {
            switch (computerSelection) {
                case 0: return "You Win! Paper beats Rock"; break;
                case 2: return "You Lose! Scissor beats Paper"; break;
            }
        } else if (playerSelection == 2) {
            switch (computerSelection) {
                case 0: return "You Lose! Rock beats Scissor"; break;
                case 1: return "You Win! Scissor beats Paper "; break;
            }
        }
    }

};

function game() {
    let playerScore = 0,
        computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let score = playRound();
        if (score.slice(4, 7) == "Win") {
            ++playerScore;
            --computerScore;
        } else if (score.slice(4, 8) == "Lose") {
            --playerScore;
            ++computerScore;
        }
        let announcement = `Your score:${playerScore}, Machine Score:${computerScore}\n${score}`;
        console.log(announcement);
    }
    let endGame = playerScore > computerScore;
    if (playerScore == computerScore) {
        endGame = "It's a Tie!|GAME OVER";
    } else {
        switch (endGame) {
            case true: endGame = "You Win!|GAME OVER"; break;
            default: endGame = "You Lose!|GAME OVER"
        }
    }
    return endGame;
};

console.log(game());