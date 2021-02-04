document.addEventListener("DOMContentLoaded", start)

function DOMContentLoaded() {
    document.querySelector("rockbutton").addEventListener("click", rock);
    document.querySelector("paperbutton").addEventListener("click", paper);
    document.querySelector("scissorbutton").addEventListener("click", scissor);
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
     document.querySelector("rockbutton").removeEventListener("click", rock);
    document.querySelector("paperbutton").removeEventListener("click", paper);
    document.querySelector("scissorbutton").removeEventListener("click", scissors);
}

function paper() {
    console.log("player selected paper");
    document.querySelector("#player1").classList.add("playerpaper");
    computerChoiceGenerator();
    playerChoice = paper;
    matchDecider();
     document.querySelector("rockbutton").removeEventListener("click", rock);
    document.querySelector("paperbutton").removeEventListener("click", paper);
    document.querySelector("scissorbutton").removeEventListener("click", scissors);
}

function scissor() {
    console.log("player selected scissor");
    document.querySelector("#player1").classList.add("playerscissor");
    computerChoiceGenerator();
    playerChoice = scissor;
    matchDecider();
     document.querySelector("rockbutton").removeEventListener("click", rock);
    document.querySelector("paperbutton").removeEventListener("click", paper);
    document.querySelector("scissorbutton").removeEventListener("click", scissors);
}
