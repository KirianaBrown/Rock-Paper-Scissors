import { elements } from "./base";
import state from "../store/State";

export const displayGameResult = (result) => {
    elements.gameResult.innerHTML = result;
};

export const updateGameResultText = (roundWinner) => {
    if (roundWinner === "player") {
        updateText("Nice one!");
        setTimeout(() => {
            updateText("go again");
        }, 700);
    }

    if (roundWinner === "computer") {
        updateText("bugger");
        setTimeout(() => {
            updateText("try again");
        }, 700);
    }

    if (roundWinner === "draw") {
        updateText("snap");
        setTimeout(() => {
            updateText("try again");
        }, 700);
    }

    if (state.computerScore === 2 && state.playerScore === 2) {
        updateText("match point!");
    }
};

function updateText(text) {
    elements.gameResult.textContent = text;
}