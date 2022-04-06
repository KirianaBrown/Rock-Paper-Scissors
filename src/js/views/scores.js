import { scoreElements } from "./base";
import state from "../store/State";

export const updateScores = (roundWinner) => {
    let playerScoreElement;
    let computerScoreElement;

    screen.width > 800 ?
        (playerScoreElement = scoreElements.playerLg) :
        scoreElements.playerSm;

    screen.width > 800 ?
        (computerScoreElement = scoreElements.computerLg) :
        scoreElements.computerSm;

    // update state scores
    console.log(roundWinner);
    roundWinner === "computer" && state.computerScore++;
    roundWinner === "player" && state.playerScore++;

    // extract current scores
    const curPlayerScore = state.playerScore;
    const curComputerScore = state.computerScore;

    console.log(curPlayerScore);
    console.log(curComputerScore);

    if (roundWinner === "player") {
        counterAnimation(playerScoreElement);
        playerScoreElement.innerHTML = state.playerScore;

        if (curComputerScore === curPlayerScore) {
            bothTied();
        } else if (curComputerScore < curPlayerScore) {
            leader("player");
            behind("computer");
        } else {
            leader("computer");
            behind("player");
        }
    }

    if (roundWinner === "computer") {
        counterAnimation(computerScoreElement);
        computerScoreElement.innerHTML = state.computerScore;

        if (curComputerScore === curPlayerScore) {
            bothTied();
        } else if (curComputerScore > curPlayerScore) {
            leader("computer");
            behind("player");
        } else {
            leader("player");
            behind("computer");
        }
    }

    if (roundWinner === "draw") {
        counterAnimation(computerScoreElement);
        counterAnimation(playerScoreElement);
        computerScoreElement.style.color = "white";
        playerScoreElement.style.color = "white";
    }
};

function counterAnimation(element) {
    element.animate(
        [
            // keyframes
            { transform: "rotateX(0deg)" },
            { transform: "rotateX(180deg)" },
            { transform: "rotateX(0deg)" },
        ], {
            // tiempos
            duration: 200,
            iterations: 1,
            easing: "ease-out",
        }
    );
}

function bothTied() {
    console.log("both tied");
}

function leader(who) {
    console.log(`${who} is currently leading`);
}

function behind(who) {
    console.log(`${who} is currently behind`);
}