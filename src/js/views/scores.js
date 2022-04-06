import { scoreElements } from "./base";
import state from "../store/State";

export const updateScores = (roundWinner) => {
    let playerScoreElement;
    let computerScoreElement;
    let playerScoreName;
    let computerScoreName;

    screen.width > 800 ?
        (playerScoreElement = scoreElements.playerLg) :
        scoreElements.playerSm;

    screen.width > 800 ?
        (computerScoreElement = scoreElements.computerLg) :
        scoreElements.computerSm;

    screen.width > 800 ?
        (playerScoreName = scoreElements.playerNameLg) :
        scoreElements.playerNameSm;

    screen.width > 800 ?
        (computerScoreName = scoreElements.computerNameLg) :
        scoreElements.computerNameSm;

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
            playerScoreName.style.color = "white";
            computerScoreName.style.color = "white";
        } else if (curComputerScore < curPlayerScore) {
            playerScoreElement.style.color = "#ff00bb";
            computerScoreElement.style.color = "white";
            playerScoreName.style.color = "#ff00bb";
            computerScoreName.style.color = "white";
        } else {
            playerScoreElement.style.color = "white";
            computerScoreElement.style.color = "#ff00bb";
            playerScoreName.style.color = "white";
            computerScoreName.style.color = "#ff00bb";
        }
    }

    if (roundWinner === "computer") {
        counterAnimation(computerScoreElement);
        computerScoreElement.innerHTML = state.computerScore;

        if (curComputerScore === curPlayerScore) {
            playerScoreElement.style.color = "white";
            computerScoreElement.style.color = "white";
            playerScoreName.style.color = "white";
            computerScoreName.style.color = "white";
        } else if (curComputerScore > curPlayerScore) {
            playerScoreElement.style.color = "white";
            computerScoreElement.style.color = "#ff00bb";
            playerScoreName.style.color = "white";
            computerScoreName.style.color = "#ff00bb";
        } else {
            playerScoreElement.style.color = "#ff00bb";
            computerScoreElement.style.color = "white";
            playerScoreName.style.color = "#ff00bb";
            computerScoreName.style.color = "white";
        }
    }

    if (roundWinner === "draw") {
        counterAnimation(computerScoreElement);
        counterAnimation(playerScoreElement);
        if (curComputerScore === curPlayerScore) {
            playerScoreElement.style.color = "white";
            computerScoreElement.style.color = "white";
            playerScoreName.style.color = "white";
            computerScoreName.style.color = "white";
        } else if (curComputerScore > curPlayerScore) {
            playerScoreElement.style.color = "white";
            computerScoreElement.style.color = "#ff00bb";
            playerScoreName.style.color = "white";
            computerScoreName.style.color = "#ff00bb";
        } else {
            playerScoreElement.style.color = "#ff00bb";
            computerScoreElement.style.color = "white";
            playerScoreName.style.color = "#ff00bb";
            computerScoreName.style.color = "white";
        }
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