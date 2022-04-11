import { scoreElements } from "./base";
import { elements } from "./base";
import state from "../store/State";

let playerScoreElement = scoreElements.playerLg;
let computerScoreElement = scoreElements.computerLg;
let playerScoreName = scoreElements.playerNameLg;
let computerScoreName = scoreElements.computerNameLg;

if (state.screenSuffix === "sm") {
    playerScoreElement = scoreElements.playerSm;
    computerScoreElement = scoreElements.computerSm;
    playerScoreName = scoreElements.playerNameSm;
    computerScoreName = scoreElements.computerNameSm;
}

const playerScoreElements = [playerScoreElement, playerScoreName];
const computerScoreElements = [computerScoreElement, computerScoreName];
const allElements = [...playerScoreElements, ...computerScoreElements];

const isComputerLeading = (yes) => {
    if (yes) {
        playerScoreElements.forEach((el) => addStyle(el, "white"));
        computerScoreElements.forEach((el) => addStyle(el, "#ff00bb"));
    } else {
        computerScoreElements.forEach((el) => addStyle(el, "white"));
        playerScoreElements.forEach((el) => addStyle(el, "#ff00bb"));
    }
};

export const updateScores = (roundWinner) => {
    // update state scores
    roundWinner === "player" && state.playerScore++;
    roundWinner === "computer" && state.computerScore++;

    // extract current scores
    const curPlayerScore = state.playerScore;
    const curComputerScore = state.computerScore;

    // Handle round changes
    roundWinner === "player" && counterAnimation(playerScoreElement);
    roundWinner === "player" &&
        setScoreText(playerScoreElement, state.playerScore);

    roundWinner === "computer" && counterAnimation(computerScoreElement);
    roundWinner === "computer" &&
        setScoreText(computerScoreElement, state.computerScore);

    roundWinner === "draw" && counterAnimation(computerScoreElement);
    roundWinner === "draw" && counterAnimation(playerScoreElement);

    // Set styles based on game lead
    if (curComputerScore > curPlayerScore) {
        isComputerLeading(true);
    }

    if (curComputerScore < curPlayerScore) {
        isComputerLeading(false);
    }

    if (curComputerScore === curPlayerScore) {
        allElements.forEach((el) => addStyle(el, "white"));
    }
};

function addStyle(element, color) {
    element.style.color = color;
}

function setScoreText(el, score) {
    el.innerHTML = score;
}

function updateGameResultText(text) {
    // elements.gameResult.textContent = text;
}

function counterAnimation(element) {
    element.animate(
        [
            // keyframes
            { transform: "rotateX(0deg)" },
            { transform: "rotateX(180deg)" },
            { transform: "rotateX(0deg)" },
        ], {
            // settings
            duration: 200,
            iterations: 1,
            easing: "ease-out",
        }
    );
}