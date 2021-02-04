document.addEventListener("DOMContentLoaded", start)

function start() {
    document.querySelector("#rock").addEventListener("click", rock);
    document.querySelector("#paper").addEventListener("click", paper);
    document.querySelector("#scissors").addEventListener("click", scissors);
}

let playerChoice
let computerChoice
let computerRandom

function rock() {
    console.log("player selected rock");
    document.querySelector("#player1>.image_rockhand").style.display = "block";
    document.querySelector("#player1>.image_paperhand").style.display = "none";
    document.querySelector("#player1>.image_scissorshand").style.display = "none";
    computerChoiceGenerator();
    playerChoice = rock;
    matchDecider();
}

function paper() {
    console.log("player selected paper");
    document.querySelector("#player1").classList.add("playerpaper");
    document.querySelector("#player1>.image_rockhand").style.display = "none";
    document.querySelector("#player1>.image_paperhand").style.display = "block";
    document.querySelector("#player1>.image_scissorshand").style.display = "none";
    computerChoiceGenerator();
    playerChoice = paper;
    matchDecider();
}

function scissors() {
    console.log("player selected scissors");
    document.querySelector("#player1>.image_rockhand").style.display = "none";
    document.querySelector("#player1>.image_paperhand").style.display = "none";
    document.querySelector("#player1>.image_scissorshand").style.display = "block";
    computerChoiceGenerator();
    playerChoice = scissors;
    matchDecider();
}


function computerChoiceGenerator() {
    console.log("computerchoice")
    computerRandom = Math.floor(Math.random() * 3) + 1;

    if (computerRandom == 1) {
        computerChoice = rock;
        console.log("computer rock");
        document.querySelector("#player2>.image_rockhand").style.display = "block";
        document.querySelector("#player2>.image_paperhand").style.display = "none";
        document.querySelector("#player2>.image_scissorshand").style.display = "none";
    }

    if (computerRandom == 2) {
        computerChoice = paper;
        console.log("computer paper");
        document.querySelector("#player2>.image_rockhand").style.display = "none";
        document.querySelector("#player2>.image_paperhand").style.display = "block";
        document.querySelector("#player2>.image_scissorshand").style.display = "none";
    }

    if (computerRandom == 3) {
        computerChoice = scissors;
        console.log("computer scissors");
        document.querySelector("#player2>.image_rockhand").style.display = "none";
        document.querySelector("#player2>.image_paperhand").style.display = "none";
        document.querySelector("#player2>.image_scissorshand").style.display = "block";
    }
}


function matchDecider() {

    if (playerChoice == rock && computerChoice == rock) {
        draw()
    }

    if (playerChoice == rock && computerChoice == paper) {
        loss()
    }

    if (playerChoice == rock && computerChoice == scissors) {
        win()
    }

    if (playerChoice == paper && computerChoice == rock) {
        win()
    }

    if (playerChoice == paper && computerChoice == paper) {
        draw()
    }

    if (playerChoice == paper && computerChoice == scissors) {
        loss()
    }
    if (playerChoice == scissors && computerChoice == rock) {
        loss()
    }

    if (playerChoice == scissors && computerChoice == paper) {
        win()
    }

    if (playerChoice == scissors && computerChoice == scissors) {
        draw()
    }
}

function win() {
    console.log("you win!");
    alert("Congrats! You won!")
    playAgain()
}

function loss() {
    console.log("you lost!");
    alert("Loser!")
    playAgain()
}

function draw() {
    console.log("it's a draw");
    alert("It's a tie, try again!")
    playAgain()
}

function playAgain() {
    console.log("");
    document.querySelector("#rock").addEventListener("click", rock);
    document.querySelector("#paper").addEventListener("click", paper);
    document.querySelector("#scissors").addEventListener("click", scissors);
}
