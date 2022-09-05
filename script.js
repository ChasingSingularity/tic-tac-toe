function getComputerChoice(min = 0, max = 2) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a Tie"
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
        } else (playerSelection == 2) {
            switch (computerSelection) {
                case 0: return "You Lose! Rock beats Scissor"; break;
                case 1: return "You Win! Scissor beats Paper "; break;
            }
        }
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));