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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        play(button.id);
    });
});

const scoreBoard = document.querySelector('.scoreBoard');
scoreBoard.textContent = `Your Score:${} , ${}:Comp Score`