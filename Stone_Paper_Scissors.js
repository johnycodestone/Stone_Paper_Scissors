let stoneBtn = document.getElementById("stone");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let circles = document.querySelectorAll(".btn");
let result = document.getElementById("result-text");
let playerScoreValue = document.getElementById("player-score-value");
let computerScoreValue = document.getElementById("computer-score-value");
let messageBox = document.querySelector(".message-box");
let message = document.querySelector(".msg");
let newGame = document.querySelector(".new-game-btn");

let stone = 0;
let paper = 1;
let scissors = 2;
let playerScore = 0;
let computerScore = 0;
let playerTurn = 0;
let computerTurn = 0;

const playComputerTurn = () => {
    computerTurn = Math.floor(Math.random() * 3);
    console.log(`Computer turn: ${computerTurn}`);  // Just for reference
}

const resetScore = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreValue.innerText = playerScore.toString();
    computerScoreValue.innerText = computerScore.toString();
    result.innerText = "New Game Started";
}

const disableButtons = () => {
    circles.forEach((circle) => {
        circle.disabled = true;
    })
}

const enableButtons = () => {
    circles.forEach((circle) => {
        circle.disabled = false;
        resetScore();
    })
}

newGame.addEventListener("click", () => {
    enableButtons();
    messageBox.classList.add("hide");
})

const checkWin = () => {
    if (playerScore === 5) {
        message.innerText = "Congratulations, you win the game!!";
        messageBox.classList.remove("hide");
        disableButtons();
    }
    else if (computerScore === 5) {
        message.innerText = "Good Effort, Please Try Again!!";
        messageBox.classList.remove("hide");
        disableButtons();
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
        playerScoreValue.innerText = playerScore.toString();
        result.innerText = "Player takes the shot!";
    }

    else {
        computerScore++;
        computerScoreValue.innerText = computerScore.toString();
        result.innerText = "Computer takes the shot!";
    }

    checkWin();
}

circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        if (circle.id === "stone") {
            playerTurn = stone;
            console.log("Stone");   // Just for reference
        }
        else if (circle.id === "paper") {
            playerTurn = paper;
            console.log("Paper");
        }
        else {
            playerTurn = scissors;
            console.log("Scissors");
        }

        playComputerTurn();
        checkWinner();

    })
})