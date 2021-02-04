// Constants

const toDoText = document.querySelector("#todo");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissors");
const startButton = document.querySelector("#start");
const gameButtons = document.querySelector("#buttons");
const buttonsH3 = document.querySelector("#buttons h3");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const bothPlayers = document.querySelector(".player");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

init();

function init() {
    console.log("Load Text");

    // Load user todo text
    toDoText.style.display = "block";
    addEventListenerToButtons();
}

function addEventListenerToButtons() {
    console.log("Button Listen");

    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    });
}

function filterBTNs() {
    console.log("filter");

    document.querySelectorAll(".filter").forEach((btn) => {
        btn.classList.remove("active");
    });
    this.classList.add("active");

    // https://www.javascripttutorial.net/javascript-dom/javascript-siblings/
    this.nextElementSibling.classList.remove("hidden");

    userChoice();
}


function userChoice() {
    console.log("Choice made");

    // IF/ELSE 3 choices

    // Show START button
    startButton.style.display = "block";
    // Listen for click start --> goTo StartGame
    startButton.addEventListener("click", () => startGame());
}

function startGame() {
    console.log("Game startet");

    // Exe Animate
    bothPlayers.classList.add("shake");
    // Exe Comp Choice
    compChoice();
}

function compChoice() {
    console.log("Computer Choice");

    // random number generator
    // Output result 
    // goTo --> ShowBothResults
}

function animateHands() {
    console.log("Animate hands");

    // Move hands up n´down 3 times
    // END
}

function showBothResults() {
    console.log("Both results");

    // show Comp hand result
    // show user hand result
    // goTO --> determineWinner
}

function determineWinner() {
    console.log("Winner is");

    // Compare results IF/ELSE
    // goTo --> showWin 
}

function showWin() {
    console.log("Winner Text");

    // Load text IF/ELSE
    // Reset by goTo --> init
}