import state from "./store/State";
import {
    elements,
    optionElements,
    disableButtons,
    activateButtons,
} from "./views/base";
import { updateScores } from "./views/scores";
import * as selectionsView from "./views/selections";
import * as resultsView from "./views/results";
import * as modalView from "./views/modal";
import * as formView from "./views/form";
import Computer from "./models/Computer";
import CompareScores from "./models/CompareScores";
import NewGameValidation from "./models/NewGameValidation";
import PlayerSelection from "./models/PlayerSelection";

// IMPORT STYLESHEETS
import "../sass/main.scss";

const gamePlayController = () => {
    if (state.isGamePlaying) {
        if (!state.haveAWinner) {
            console.log("Start A ROUND");
            roundController();
        } else {
            console.log("We have a winner!");
        }
    } else {
        console.log("Game play is NOT live");
    }
};

const roundController = () => {
    /**
     * 1. Play a round
     * 2. Get playersSelection
     * 3. Generate Computer Selection
     * 4. Determine round winner
     * 5. Display round result
     * 6. Update game scores
     * 7. reset gameboard
     */

    // 1. Get player selection
    const playerSelection = state.options[+state.playerSelection];

    // 2. Get computer selection
    const computerSelection = state.options[Computer()];

    // 3. Render selections to UI
    selectionsView.renderSelections(playerSelection, computerSelection);

    // 4. Compare scores
    const winner = CompareScores(playerSelection, computerSelection);

    // 5. Display Result
    resultsView.displayGameResult(winner);

    // 5. Update scores
    updateScores(winner);

    // 6. Reset gameBoard
    setTimeout(() => {
        activateButtons(state.buttons);
    }, 1500);
};

const resetGameBoard = () => {};

const startNewGame = (playerName) => {
    state.playerName = playerName;
    state.isGamePlaying = true;
    formView.closeNewPlayerForm();
    setPlayerSelection();
};

const verifyNewGame = () => {
    const { valid, playerName, counter } = NewGameValidation();

    if (!valid) {
        if (counter === 1) {
            formView.newPlayerFormFeedback("Oops, let's try that again!");
        }
        if (counter === 2) {
            formView.newPlayerFormFeedback(
                "Hmmm I see you didn't enter a name - how about one more chance!"
            );
        }
        if (counter === 3) {
            formView.newPlayerFormFeedback(
                "Okay I see you don't want to give me a name - let's go with BertyBot then!"
            );
            startNewGame("BertyBot");
        }
    } else {
        formView.newPlayerFormFeedback(
            `Yay, ${playerName}, let's get this game started!!`
        );
        startNewGame(playerName);
    }
};

/*
     EVENT LISTENERS
*/

elements.newPlayerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    verifyNewGame();
});

const setPlayerSelection = () => {
    // Get options avaliable
    const { rock, paper, scissors } = optionElements;
    state.buttons = [rock, paper, scissors];

    // Set and handle event listeners on each option
    state.buttons.forEach((el) => {
        el.addEventListener("click", (e) => {
            // Set state
            state.playerSelection = el.value;
            // Handle display props of btns
            disableButtons(state.buttons);
            el.classList.add("options-selected");
            // Set game play
            gamePlayController();
        });
    });
};

window.onload = () => {
    elements.loaderBackground.style.display = "none";
    elements.loader.style.display = "none";
};