const choices = document.querySelectorAll('.choice');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) return 'draw';
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }
    
    return 'computer';
};

const updateScore = (winner) => {
    if (winner === 'player') {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
};

const updateResultText = (playerChoice, computerChoice, winner) => {
    const messages = {
        draw: `It's a draw! Both chose ${playerChoice}`,
        player: `You win! ${playerChoice} beats ${computerChoice}`,
        computer: `You lose! ${computerChoice} beats ${playerChoice}`
    };
    resultText.textContent = messages[winner];
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        
        updateScore(winner);
        updateResultText(playerChoice, computerChoice, winner);
    });
});