import { scoreElements, elements, selectionOptionElements } from "./base";

export const resetScoreElements = () => {
    const allScoreElements = [
        scoreElements.playerLg,
        scoreElements.computerLg,
        scoreElements.playerNameLg,
        scoreElements.computerNameLg,
    ].forEach((el) => (el.style.color = "white"));

    scoreElements.playerLg.textContent = 0;
    scoreElements.computerLg.textContent = 0;

    // 2. game result text
    elements.gameResult.textContent = "rock paper or scissors?";
    // 3. images
    selectionOptionElements.playerImage.src = `../img/player.svg`;
    selectionOptionElements.playerImage.alt = `player selection`;

    selectionOptionElements.computerImage.src = `../img/robot.svg`;
    selectionOptionElements.computerImage.alt = `robot player`;
};