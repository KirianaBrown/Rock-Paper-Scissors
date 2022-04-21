import { selectionOptionElements } from "./base";

export const renderSelections = (playerSelection, computerSelection) => {
    selectionOptionElements.playerImage.src = `../static/img/${playerSelection}-lg.svg`;
    selectionOptionElements.playerImage.alt = `${playerSelection}`;

    selectionOptionElements.computerImage.src = `../static/img/${computerSelection}-lg.svg`;
    selectionOptionElements.computerImage.alt = `${computerSelection}`;
};