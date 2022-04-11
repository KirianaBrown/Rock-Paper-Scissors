import state from "./store/State";
import {
    elements,
    optionElements,
    disableButtons,
    activateButtons,
    // scoreElements,
} from "./views/base";
import { rotateImages } from "./views/rotate";
import { updateScores } from "./views/scores";
import { setPlayerName } from "./views/playerName";
import { animateRoundWinner } from "./views/animate";
import { createModal } from "./views/modal";
import { resetScoreElements } from "./views/reset";
import * as selectionsView from "./views/selections";
import * as resultsView from "./views/results";
import * as formView from "./views/form";
import Computer from "./models/Computer";
import CompareScores from "./models/CompareScores";
import NewGameValidation from "./models/NewGameValidation";
import WinnerCheck from "./models/WinnerCheck";

// IMPORT STYLESHEETS
import "../sass/main.scss";

const gamePlayController = () => {
    if (state.isGamePlaying) {
        roundController();
    } else {
        console.log("Game play is NOT live");
    }
};

const roundController = () => {
    disableButtons(state.buttons);
    // 1. Animate selections
    function clearAnimation() {
        clearInterval(rotateSelections);
    }

    rotateImages();
    const rotateSelections = setInterval(rotateImages, 35);
    setTimeout(clearAnimation, 400);

    // 2. Handle round selections
    setTimeout(() => {
        // a. selections
        const selections = {
            player: state.options[+state.playerSelection],
            computer: state.options[Computer()],
        };

        // b. render selections
        selectionsView.renderSelections(selections.player, selections.computer);

        // c. Get winner
        const winner = CompareScores(selections);

        // d. Update state variables
        const roundResult = {
            ...selections,
            winner,
        };

        state.roundResults.push(roundResult);
        state.roundsCount++;

        // e. Handle each round outcome
        animateRoundWinner(winner);
        updateScores(winner);

        // f. check game winner
        WinnerCheck();

        // g. Handle if winner
        if (state.haveAWinner) {
            weHaveAWinner();
        } else {
            // h. reset gameboard to play another round
            activateButtons(state.buttons);
        }
    }, 600);
};

const weHaveAWinner = () => {
    /**
     * show modal that displays winner
     * update color of winner number
     * pop modal which includes 'play again btn'
     * pop modal which has new player 'form'
     */
    // 0. Set state
    state.haveAWinner = true;

    // 1. Disable buttons
    disableButtons(state.buttons);

    // 2. Update game result with relevant text
    resultsView.displayGameResult("we have a winner");

    // 3. Color selected player as winner
    resultsView.highlightWinner(state.playerScore, state.computerScore);

    // 4. show game modal
    const gameResults = {
        roundResults: [...state.roundResults],
        playerTotal: state.playerScore,
        computerTotal: state.computerScore,
    };

    setTimeout(() => {
        createModal(gameResults);
    }, 500);
};

const startNewGame = (playerName) => {
    state.playerName = playerName;
    state.isGamePlaying = true;
    formView.closeNewPlayerForm();
    setPlayerSelection();
    setPlayerName(state.playerName);
    state.screenSuffix = screen.width > 800 ? "lg" : "sm";
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
                "Okay I see you don't want to give me a name - let's go with BERTYBOT then!"
            );
            startNewGame("BERTYBOT");
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

const resetGameTable = () => {
    // 1. reset state
    state.computerScore = 0;
    state.playerScore = 0;
    state.haveAWinner = false;
    state.roundResults = [];
    state.roundsCount = 0;
    state.gameResult = "";
    // 2. activate game buttons
    activateButtons(state.buttons);

    // 3. reset ui elements (scores & result)
    resetScoreElements();

    // 4. call gameplay function
    state.isGamePlaying = true;
    state.screenSuffix = screen.width > 800 ? "lg" : "sm";
};

const playAgain = () => {
    resetGameTable();

    setTimeout(() => {
        const resultsModalElement = document
            .querySelector(".results-modal")
            .remove();

        const resultsModalOverlayElement = document
            .querySelector(".results-modal-overlay")
            .remove();
    }, 300);
};

const newGame = () => {
    setTimeout(() => {
        window.location.reload();
    }, 300);
};

document.body.addEventListener("click", (event) => {
    event.target.classList.contains("btn-playAgain") && playAgain();

    event.target.classList.contains("btn-newGame") && newGame();
});

window.onload = () => {
    elements.loaderBackground.style.display = "none";
    elements.loader.style.display = "none";
};