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

    if (roundWinner === "player") {
        counterAnimation(playerScoreElement);
        playerScoreElement.innerHTML = state.playerScore;

        if (curComputerScore === curPlayerScore) {
            playerScoreElement.style.color = "white";
            computerScoreElement.style.color = "white";
        } else if (curComputerScore < curPlayerScore) {
            playerScoreElement.style.color = "green";
            computerScoreElement.style.color = "red";
        } else {
            playerScoreElement.style.color = "red";
            computerScoreElement.style.color = "green";
        }
    }

    if (roundWinner === "computer") {
        counterAnimation(computerScoreElement);
        computerScoreElement.innerHTML = state.computerScore;

        if (curComputerScore === curPlayerScore) {
            playerScoreElement.style.color = "white";
            computerScoreElement.style.color = "white";
        } else if (curComputerScore > curPlayerScore) {
            playerScoreElement.style.color = "red";
            computerScoreElement.style.color = "green";
        } else {
            playerScoreElement.style.color = "green";
            computerScoreElement.style.color = "red";
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