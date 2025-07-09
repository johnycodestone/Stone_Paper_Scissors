let stoneBtn = document.getElementById("stone");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let circles = document.querySelectorAll(".btn");
let result = document.getElementById("result-text");
let playerScoreValue = document.getElementById("player-score-value");
let computerScoreValue = document.getElementById("computer-score-value");

let stone = 0;
let paper = 1;
let scissors = 2;
let playerScore = 0;
let computerScore = 0;
let playerTurn = 0;
let computerTurn = 0;

const playComputerTurn = () => {
    computerTurn = Math.floor(Math.random() * 3);
}

const checkWin = () => {
    if (playerScore === 5) {
        
    }
}

const checkWinner = () => {
    if (playerTurn === computerTurn) {
        result.innerText = "It`s a Tie!";
    }
    else if ((playerTurn === stone && computerTurn === scissors) ||
        (playerTurn === paper && computerTurn === stone) ||
        (playerTurn === scissors && computerTurn === paper)) {

        playerScore++;
        playerScoreValue.innerText = playerScore;

    }

    else {
        computerScore++;
        computerScoreValue.innerText =computerScore;
    }

    checkWinner();
}

circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        if (circle.id === "stone") {
            playerTurn = stone;
        }
        else if (circle.id === "paper") {
            playerTurn = paper;
        }
        else {
            playerTurn = scissors;
        }
    })
    playComputerTurn();
    checkWinner();
})