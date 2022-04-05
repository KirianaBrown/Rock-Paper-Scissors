import { scoreElements } from "./base";

export const updateScores = (roundWinner) => {
    console.log(roundWinner);

    let playerScoreElement;
    let computerScoreElement;

    screen.width > 800 ?
        (playerScoreElement = scoreElements.playerLg) :
        scoreElements.playerSm;

    screen.width > 800 ?
        (computerScoreElement = scoreElements.computerLg) :
        scoreElements.computerSm;

    if (roundWinner === "player") {
        counterAnimation(playerScoreElement);
        playerScoreElement.innerHTML = "1";
    }

    if (roundWinner === "computer") {
        counterAnimation(computerScoreElement);
        computerScoreElement.innerHTML = "1";
    }

    if (roundWinner === "draw") {
        console.log("It was a draw");
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