let userScore = 0;
let computerScore = 0;

// DOM Elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.getElementById("message");
const userDisplay_div = document.getElementById("user-choice-display");
const compDisplay_div = document.getElementById("computer-choice-display");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Helper: Converts choice string to Font Awesome HTML
function getIconHTML(choice) {
    if (choice === "rock") return '<i class="fa-solid fa-hand-back-fist"></i>';
    if (choice === "paper") return '<i class="fa-solid fa-hand"></i>';
    if (choice === "scissors") return '<i class="fa-solid fa-hand-scissors"></i>';
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "You win! 🔥";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You lost... 💀";
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = "It's a draw! 🤝";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    // 1. Update the visual icons in the Battle Area
    userDisplay_div.innerHTML = getIconHTML(userChoice);
    compDisplay_div.innerHTML = getIconHTML(computerChoice);

    // 2. Logic Check
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}

main();
