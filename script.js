function coumputerPlay(){
    const choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*3);
    return choice[index];
}

const playerSelection = '';
const computerSelection = '';

let pScore = 0, cScore = 0;

function playRound(p, c){
    
    p = prompt('Enter your choice: ');
    c = coumputerPlay();

    if(p.toUpperCase() === c.toUpperCase()){
        return 'Tie!';
    }
    else if(p.toUpperCase() === 'ROCK' && c.toUpperCase() === 'PAPER'){
        cScore++;
        return 'You lose! Paper beats Rock!';
    }
    else if(p.toUpperCase() === 'ROCK' && c.toUpperCase() === 'SCISSORS'){
        pScore++;
        return 'You win! Rock beats Scissors!';
    }
    else if(p.toUpperCase() === 'PAPER' && c.toUpperCase() === 'ROCK'){
        pScore++;
        return 'You win! Paper beats Rock!';
    }
    else if(p.toUpperCase() === 'PAPER' && c.toUpperCase() === 'SCISSORS'){
        cScore++;
        return 'You lose! Scissors beat Paper!';
    }
    else if(p.toUpperCase() === 'SCISSORS' && c.toUpperCase() === 'ROCK'){
        cScore++;
        return 'You lose! Rock beats Scissors!';
    }
    else if(p.toUpperCase() === 'SCISSORS' && c.toUpperCase() === 'PAPER'){
        pScore++;
        return 'You win! Scissors beat Paper!';
    }
    else{
        return 'Invalid choice!';
    }
}



function game(){
    for(let i=0; i<5; i++){
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if(pScore === cScore){
        console.log(`Your score = ${pScore}\nOpponent's score = ${cScore}\nIt's a Tie!`);
    }

    if(pScore > cScore){
        console.log(`Your score = ${pScore}\nOpponent's score = ${cScore}\nYou Win!`);
    }

    if(pScore < cScore){
        console.log(`Your score = ${pScore}\nOpponent's score = ${cScore}\nYou Lose!`);
    }
}

game();