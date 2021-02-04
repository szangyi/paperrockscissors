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
    document.querySelector("#player1").classList.add("playerrock");
    computerChoiceGenerator();
    playerChoice = rock;
    matchDecider();
    document.querySelector("#rock").removeEventListener("click", rock);
    document.querySelector("#paper").removeEventListener("click", paper);
    document.querySelector("#scissors").removeEventListener("click", scissors);
}

function paper() {
    console.log("player selected paper");
    document.querySelector("#player1").classList.add("playerpaper");
    computerChoiceGenerator();
    playerChoice = paper;
    matchDecider();
    document.querySelector("#rock").removeEventListener("click", rock);
    document.querySelector("#paper").removeEventListener("click", paper);
    document.querySelector("#scissors").removeEventListener("click", scissors);
}

function scissors() {
    console.log("player selected scissors");
    document.querySelector("#player1").classList.add("playerscissors");
    computerChoiceGenerator();
    playerChoice = scissors;
    matchDecider();
    document.querySelector("#rock").removeEventListener("click", rock);
    document.querySelector("paperbutton").removeEventListener("click", paper);
    document.querySelector("scissorsbutton").removeEventListener("click", scissors);
}


function computerChoiceGenerator() {
    console.log("computerchoice")
    computerRandom = Math.floor(Math.random() * 3) + 1;

    if (computerRandom == 1) {
        computerChoice = rock;
        console.log("computer chose rock");
        document.querySelector("#player2").classList.add("playerrock");
    }

    if (computerRandom == 2) {
        computerChoice = paper;
        console.log("computer chose paper");
        document.querySelector("#player2").classList.add("playerpaper");
    }

    if (computerRandom == 3) {
        computerChoice = scissors;
        console.log("computer chose scissors");
        document.querySelector("#player2").classList.add("playerscissors");
    }
}

function replay() {
    console.log("replaaaay");
    document.querySelector("#rock").addEventListener("click", rock);
    document.querySelector("#paper").addEventListener("click", paper);
    document.querySelector("#scissors").addEventListener("click", scissors);
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
    replay()
}

function loss() {
    console.log("you lost!");
    replay()
}

function draw() {
    console.log("it's a draw");
    replay()
}

