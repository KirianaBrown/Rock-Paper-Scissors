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

    if (roundWinner === "player") {
        state.playerScore++;
        counterAnimation(playerScoreElement);
        playerScoreElement.innerHTML = state.playerScore;
    }

    if (roundWinner === "computer") {
        state.computerScore++;
        counterAnimation(computerScoreElement);
        computerScoreElement.innerHTML = state.computerScore;
    }

    if (roundWinner === "draw") {
        counterAnimation(computerScoreElement);
        counterAnimation(playerScoreElement);
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