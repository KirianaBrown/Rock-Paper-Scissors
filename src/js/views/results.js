import { elements } from "./base";

export const displayGameResult = (result) => {
    elements.gameResult.innerHTML = result;
};

export const highlightWinner = (playerScore, computerScore) => {
    console.log("Highlight the winner");

    const winner = playerScore === 3 ? "player" : "computer";

    if (winner === "player") {
        elements.playerName.forEach((el) => {
            el.style.color = "green";
        });
    }

    if (winner === "computer") {
        elements.computerName.forEach((el) => {
            el.style.color = "green";
        });
    }

    console.log(winner);
};