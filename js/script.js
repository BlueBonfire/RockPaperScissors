
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
        return  "You Lose! Rock beats Scissor";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return  "You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return "You Lose! Scissor beats Paper";
    } else {
        return  "Draw! Try again";
    }
}


// function game() {
//     var player = 0;
//     var computer = 0;
//     for (let i = 0; i < 5; i++) {
//         if (player >= 3 || computer >= 3) {
//             break;
//         } else {
//             const selectionPrompt = prompt("Rock , Paper or Scissors", '');
//             const playerSelection = selectionPrompt != null ? selectionPrompt.toLowerCase() : null;
//             if (playerSelection == null) return;
//             const computerSelection = getComputerChoice();
//             console.log(computerSelection);
//             if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissor') {
//                 console.log(playRound(playerSelection, computerSelection));
//                 if (playRound(playerSelection, computerSelection) == "You Win! Rock beats Scissor" || playRound(playerSelection, computerSelection) == "You Win! Scissor beats Paper" || playRound(playerSelection, computerSelection) == "You Win! Paper beats Rock") {
//                     player++;
//                 } else if (playRound(playerSelection, computerSelection) == "You Lose! Paper beats Rock" || playRound(playerSelection, computerSelection) == "You Lose! Rock beats Scissor" || playRound(playerSelection, computerSelection) == "You Lose! Scissor beats Paper") {
//                     computer++;
//                 } //else {
//                 //     player++;
//                 //     computer++;
//                 // }
//             } else {
//                 alert("This is not a valid value");
//                 i--;
//             }
//         }
//     }

//     if (player > computer) {
//         alert("You Win!");
//     }else if (player < computer) {
//         alert("You Lose!");
//     } else {
//         alert("Draw!");
//     }
// }
// game();

let player = 0;
let computer = 0;
let playerSelection = '';
let result = '';
const mainResult = document.getElementById("result");
const reset = document.getElementById("reset");
const display = document.getElementById("root");
const playerScore = document.getElementById("playerScore");
const playerChoice = document.getElementById("playerChoice");
const computerScore = document.getElementById("computerScore");
const computerChoice = document.getElementById("computerChoice");
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
      playerSelection = button.id;
      //console.log(playerSelection);
      game();
      playerScore.innerText = player;
      computerScore.innerText = computer;
  });
});


function game() {
    
    if (player >= 5 || computer >= 5) return;
    let showResult;
    
    const computerSelection = getComputerChoice();
    //console.log(computerSelection);
    computerChoice.innerText = computerSelection;
    playerChoice.innerText = playerSelection;
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissor') {
        showResult = playRound(playerSelection, computerSelection);
        display.innerText = showResult;
        if (playRound(playerSelection, computerSelection) == "You Win! Rock beats Scissor" || playRound(playerSelection, computerSelection) == "You Win! Scissor beats Paper" || playRound(playerSelection, computerSelection) == "You Win! Paper beats Rock") {
            player++;
            
        } else if (playRound(playerSelection, computerSelection) == "You Lose! Paper beats Rock" || playRound(playerSelection, computerSelection) == "You Lose! Rock beats Scissor" || playRound(playerSelection, computerSelection) == "You Lose! Scissor beats Paper") {
            computer++;
            
        } 
    }


    if (player >= 5) {
        result = 'Player Win'
        reset.style.display = 'block';
    } else if (computer >= 5) {
        result = 'Computer Win'
        reset.style.display = 'block';
    }

    mainResult.innerText = result;
}


reset.addEventListener('click', () => {
    mainResult.innerText = '';
    display.innerText = '';
    playerSelection = '';
    result = '';
    reset.style.display = 'none';
    player = 0;
    computer = 0;
    playerScore.innerText = player;
    computerScore.innerText = computer;
    playerChoice.innerText = '';
    computerChoice.innerText = '';
     

});





        
    