let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('.choice');

// const playerChoice = document.getElementById('playerChoice');
// const computerChoice = document.getElementById('computerChoice');

let playerImg = document.getElementById('p-display-img');
let computerImg = document.getElementById('c-display-img');

// const roundResult = document.getElementById('roundResult');
// const score = document.getElementById('score');
let pScoreDisplay = document.getElementById('pScore-display');
let cScoreDisplay = document.getElementById('cScore-display');

const winner = document.getElementById('winner');
const restart = document.getElementById('restart');

let pScore = 0, cScore = 0;

function coumputerPlay(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random()*3);
    return choice[index];
}

buttons.forEach(button => button.addEventListener('click', function(e) {

    playerSelection = e.target.getAttribute('data-text');
    computerSelection = coumputerPlay();


    playerImg.innerHTML = displayImg(playerSelection);
    computerImg.innerHTML = displayImg(computerSelection);

    winner.textContent = playRound(playerSelection, computerSelection);

    pScoreDisplay.textContent = pScore;
    cScoreDisplay.textContent = cScore;

    if(declareWinner()[0]){
        if(declareWinner()[1] == 'p'){
            winner.textContent = 'You Win!';
        }
        else if(declareWinner()[1] == 'c'){
            winner.textContent = 'You Lose!';
        }
    }
}));  

restart.addEventListener('click', () => {
    pScore = 0, cScore = 0;
    winner.textContent = 'Make your move!';
    pScoreDisplay.textContent = '0';
    cScoreDisplay.textContent = '0';
    playerImg.innerHTML = '';
    computerImg.innerHTML = '';
});

function displayImg(selection){
    if(selection.toUpperCase() == 'ROCK'){
        return '<img src="img/rock.png" width=150px height=150px alt="Your choice">';
    }
    else if(selection.toUpperCase() == 'PAPER'){
        return '<img src="img/paper.png" width=150px height=150px alt="Your choice"></img>';
    }
    else if(selection.toUpperCase() == 'SCISSORS'){
        return '<img src="img/scissors.png" width=150px height=150px alt="Your choice">';
    }
}

function declareWinner(){
    let w;

    if(pScore == 5) w = 'p';
    else if(cScore == 5) w = 'c';

    return [pScore == 5 || cScore == 5, w];
}

function playRound(p, c){

    if(p.toUpperCase() === c.toUpperCase()){
        return 'Tie!';
    }
    else if(p.toUpperCase() === 'ROCK' && c.toUpperCase() === 'PAPER'){
        cScore++;
        return 'Paper beats Rock!';
    }
    else if(p.toUpperCase() === 'ROCK' && c.toUpperCase() === 'SCISSORS'){
        pScore++;
        return 'Rock beats Scissors!';
    }
    else if(p.toUpperCase() === 'PAPER' && c.toUpperCase() === 'ROCK'){
        pScore++;
        return 'Paper beats Rock!';
    }
    else if(p.toUpperCase() === 'PAPER' && c.toUpperCase() === 'SCISSORS'){
        cScore++;
        return 'Scissors beat Paper!';
    }
    else if(p.toUpperCase() === 'SCISSORS' && c.toUpperCase() === 'ROCK'){
        cScore++;
        return 'Rock beats Scissors!';
    }
    else if(p.toUpperCase() === 'SCISSORS' && c.toUpperCase() === 'PAPER'){
        pScore++;
        return 'Scissors beat Paper!';
    }
    else{
        return 'Invalid choice!';
    }
}
