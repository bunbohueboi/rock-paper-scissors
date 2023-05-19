
function getComputerChoice(){
    const gameChoices = ['rock', 'paper', 'scissors'];
    const intSelection = Math.floor(Math.random()*3);
    return gameChoices[intSelection];
}

function getPlayerChoice(){
    const playerChoice = prompt("Type your choice (rock,paper, or scissors): ").toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection==computerSelection){
        console.log(`You both chose ${playerSelection}, it's a tie.`);
    }

    if (playerSelection=='rock' && computerSelection=='paper'){
        console.log(`The computer chose ${computerSelection}, you lose.`)
    }

    if (playerSelection=='rock' && computerSelection=='scissors'){
        console.log(`The computer chose ${computerSelection}, you win.`)
    }

    if (playerSelection=='paper' && computerSelection=='rock'){
        console.log(`The computer chose ${computerSelection}, you win.`)
    }

    if (playerSelection=='paper' && computerSelection=='scissors'){
        console.log(`The computer chose ${computerSelection}, you lose.`)
    }

    if (playerSelection=='scissors' && computerSelection=='paper'){
        console.log(`The computer chose ${computerSelection}, you win.`)
    }

    if (playerSelection=='scissors' && computerSelection=='rock'){
        console.log(`The computer chose ${computerSelection}, you lose.`)
    }
}

const computerSelection=getComputerChoice();
const playerSelection=getPlayerChoice();
playRound(playerSelection,computerSelection);
