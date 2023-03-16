
function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[randomNumber];
    return computerChoice;
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissor') {
        return 1 //"You Win! Rock beats Scissor";
    }else if(playerSelection == 'rock' && computerSelection == 'paper')
    {
        return -1 //"You Lose! Paper beats Rock";
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        return 1 //"You Win! Scissor beats Paper";
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        return  -1 //"You Lose! Rock beats Scissor";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return  1 //"You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return -1 //"You Lose! Scissor beats Paper";
    } else {
        return  0 //"Draw! Try again";
    }
}


function game() {
    var player = 0;
    var computer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock , Paper or Scissors", '').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissor') {
            console.log(playRound(playerSelection, computerSelection));
            if (playRound(playerSelection, computerSelection) == 1) {
                player++;
            } else if (playRound(playerSelection, computerSelection) == -1) { 
                computer++;
            } else {
                player++;
                computer++;
            }
        } else {
            alert("This is not a valid value")
        }
    }

    if (player > computer) {
        alert("You Win!");
    }else if (player < computer) {
        alert("You Lose!");
    } else {
        alert("Draw!");
    }
}
game();