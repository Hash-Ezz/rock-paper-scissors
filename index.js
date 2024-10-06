document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const rules = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock'],
    };
    
    let score = 12;
    const scoreElement = document.getElementById('score');
    const resultElement = document.getElementById("result");
    const rulesModal = document.getElementById('rules-modal');

    // Utility functions
    const getHouseChoice = () => choices[Math.floor(Math.random() * choices.length)];

    const determineWinner = (playerChoice, houseChoice) => {
        if (playerChoice === houseChoice) return 'draw';
        return rules[playerChoice].includes(houseChoice) ? 'win' : 'lose';
    };

    const updateScore = (result) => {
        if (result === 'win') score += 1;
        else if (result === 'lose') score -= 1;
        scoreElement.textContent = score;
    };

    const playRound = (playerChoice) => {
        const houseChoice = getHouseChoice();
        const result = determineWinner(playerChoice, houseChoice);
        resultElement.innerText = `You picked ${playerChoice}. The computer picked ${houseChoice}. You ${result}`;
        updateScore(result);
    };

    // Event listeners
    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => {
            playRound(button.dataset.choice);
        });
    });

    document.getElementById('rules').addEventListener('click', () => {
        rulesModal.classList.remove('hidden');
    });

    document.getElementById('close-modal').addEventListener('click', () => {
        rulesModal.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === rulesModal) rulesModal.classList.add('hidden');
    });

    document.getElementById("play-again").addEventListener('click', () => {
        window.location.reload();
    });
});
