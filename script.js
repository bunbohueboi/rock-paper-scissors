
function getComputerChoice(){
    const gameChoices = ['rock', 'paper', 'scissors'];
    const intSelection = Math.floor(Math.random()*3);
    return gameChoices[intSelection];
}

function getPlayerChoice(){
    const playerChoice = prompt("Type your choice (rock,paper, or scissors): ").toLowerCase();
    return playerChoice;
}

let playerWins=0;
let computerWins=0;

function playRound(playerSelection, computerSelection){
    if (playerSelection==computerSelection){
        console.log(`You both chose ${playerSelection}, it's a tie.`);
    }

    if (playerSelection=='rock' && computerSelection=='paper'){
        console.log(`The computer chose ${computerSelection}, you lose.`)
        ++computerWins;
    }

    if (playerSelection=='rock' && computerSelection=='scissors'){
        console.log(`The computer chose ${computerSelection}, you win.`)
        ++playerWins;

    }

    if (playerSelection=='paper' && computerSelection=='rock'){
        console.log(`The computer chose ${computerSelection}, you win.`)
        ++playerWins;

    }

    if (playerSelection=='paper' && computerSelection=='scissors'){
        console.log(`The computer chose ${computerSelection}, you lose.`)
        ++computerWins;

    }

    if (playerSelection=='scissors' && computerSelection=='paper'){
        console.log(`The computer chose ${computerSelection}, you win.`)
        ++playerWins;
    }

    if (playerSelection=='scissors' && computerSelection=='rock'){
        console.log(`The computer chose ${computerSelection}, you lose.`)
        ++computerWins;
    }
}

function game(){
    for (let i=0; i<5; i++){
        //const playerSelection=getPlayerChoice();
        playRound(getPlayerChoice(),getComputerChoice());
    }
    
    if(playerWins > computerWins){ return `You have won ${playerWins} out of 5 times. You win!`}
    if(playerWins < computerWins){ return `The coputer has won ${computerWins} out of 5 times. You lose!`}


}

console.log(game());