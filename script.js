function getCChoice() {
    let min = 0, max = 2;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getPChoice(pChoice) {
    switch (pChoice) {
        case "rock": return 0;
        case "paper": return 1;
        case "scissor": return 2;
    };
};

function play(pChoice) {
    pSelection = getPChoice(pChoice);
    cSelection = getCChoice();
    if (pSelection == cSelection) {
        return "It's a Tie";
    } else {
        if (pSelection == 0) {
            switch (cSelection) {
                case 1: return "You Lose! Paper beats Rock"; break;
                case 2: return "You Win! Rock beats Scissor"; break;
            }
        } else if (pSelection == 1) {
            switch (cSelection) {
                case 0: return "You Win! Paper beats Rock"; break;
                case 2: return "You Lose! Scissor beats Paper"; break;
            }
        } else if (pSelection == 2) {
            switch (cSelection) {
                case 0: return "You Lose! Rock beats Scissor"; break;
                case 1: return "You Win! Scissor beats Paper "; break;
            }
        }
    }
};
let pScore = 0, cScore = 0, score = 0;
function sBoard(e) {
    score = play(e);
    if (score.slice(4, 7) == "Win") {
        ++pScore;
        --cScore;
    } else if (score.slice(4, 8) == "Lose") {
        --pScore;
        ++cScore;
    };
    let scoreBoard = document.querySelector('.scoreBoard');

    if (pScore < 5 && cScore < 5) {
        scoreBoard.textContent = `Your Score:${pScore} | ${cScore}:Comp Score || ${score}`
    } else if (pScore == 5 || cScore == 5) {
        if (pScore > cScore) {
            scoreBoard.textContent = "You win!GAME OVER ";
        } else {
            scoreBoard.textContent = 'You lose!Game Over';
        }
    }
};
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (pScore < 5 && cScore < 5) sBoard(button.id);
    });
});

