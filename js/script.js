const playerSelection = prompt("Rock , Paper or Scissors", '').toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);


function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[randomNumber];
    return computerChoice;
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissor') {
        return "You Win! Rock beats Scissor";
    }else if(playerSelection == 'rock' && computerSelection == 'paper')
    {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        return "You Win! Scissor beats Paper";
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        return "You Lose! Rock beats Scissor";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return "You Lose! Scissor beats Paper";
    } else {
        return "Draw! Try again";
    }
}

if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissor') {
    console.log(playRound(playerSelection, computerSelection));
} else {
    alert("This is not a valid value")
}
