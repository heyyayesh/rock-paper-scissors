let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('.choice');

const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');

const roundResult = document.getElementById('roundResult');
const score = document.getElementById('score');

const winner = document.getElementById('winner');
const reset = document.getElementById('reset');

let pScore = 0, cScore = 0;

function coumputerPlay(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random()*3);
    return choice[index];
}

buttons.forEach(button => button.addEventListener('click', function(e) {

    playerSelection = e.target.textContent;
    computerSelection = coumputerPlay();

    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;

    roundResult.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `You : ${pScore} VS ${cScore} : Computer`;

    if(declareWinner()[0]){
        if(declareWinner()[1] == 'p') winner.textContent = 'You win! Congratulations!';
        else if(declareWinner()[1] == 'c') winner.textContent = 'The mighty computer wins. Better luch next time!';
    }
}));  

reset.addEventListener('click', () => {
    pScore = 0, cScore = 0;
    playerChoice.textContent = 'None';
    computerChoice.textContent = 'None';
    roundResult.textContent = 'You haven\'t played a round yet';
    roundResult.style.backgroundColor = 'white';
    score.textContent = `You : 0 VS 0 : Computer`;
    winner.textContent = 'Winner : None';
});

function declareWinner(){
    let w;

    if(pScore == 5) w = 'p';
    else if(cScore == 5) w = 'c';

    return [pScore == 5 || cScore == 5, w];
}

function playRound(p, c){

    if(p.toUpperCase() === c.toUpperCase()){
        roundResult.style.backgroundColor = 'yellow';
        return 'Tie!';
    }
    else if(p.toUpperCase() === 'ROCK' && c.toUpperCase() === 'PAPER'){
        cScore++;
        roundResult.style.backgroundColor = 'red';
        return 'Paper beats Rock!';
    }
    else if(p.toUpperCase() === 'ROCK' && c.toUpperCase() === 'SCISSORS'){
        pScore++;
        roundResult.style.backgroundColor = 'lime';
        return 'Rock beats Scissors!';
    }
    else if(p.toUpperCase() === 'PAPER' && c.toUpperCase() === 'ROCK'){
        pScore++;
        roundResult.style.backgroundColor = 'lime';
        return 'Paper beats Rock!';
    }
    else if(p.toUpperCase() === 'PAPER' && c.toUpperCase() === 'SCISSORS'){
        cScore++;
        roundResult.style.backgroundColor = 'red';
        return 'Scissors beat Paper!';
    }
    else if(p.toUpperCase() === 'SCISSORS' && c.toUpperCase() === 'ROCK'){
        cScore++;
        roundResult.style.backgroundColor = 'red';
        return 'Rock beats Scissors!';
    }
    else if(p.toUpperCase() === 'SCISSORS' && c.toUpperCase() === 'PAPER'){
        pScore++;
        roundResult.style.backgroundColor = 'lime';
        return 'Scissors beat Paper!';
    }
    else{
        return 'Invalid choice!';
    }
}
