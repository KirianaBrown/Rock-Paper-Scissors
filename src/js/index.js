import state from "./store/State";
import {
    elements,
    optionElements,
    disableButtons,
    activateButtons,
    scoreElements,
} from "./views/base";
import { rotateImages } from "./views/rotate";
import { updateScores } from "./views/scores";
import { setPlayerName } from "./views/playerName";
import { animateRoundWinner } from "./views/animate";
import * as selectionsView from "./views/selections";
import * as resultsView from "./views/results";
import * as modalView from "./views/modal";
import * as formView from "./views/form";
import Computer from "./models/Computer";
import CompareScores from "./models/CompareScores";
import NewGameValidation from "./models/NewGameValidation";
import PlayerSelection from "./models/PlayerSelection";
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
        state.roundWinner.push(winner);
        state.playerSelections.push(selections.player);
        state.computerSelections.push(selections.computer);
        state.roundsCount++;

        // e. Handle each round outcome
        animateRoundWinner(winner);
        updateScores(winner);
    }, 600);

    // setTimeout(() => {
    //     // a. Render actual
    //     selectionsView.renderSelections(selections.player, selections.computer);
    //     // b. update state with round result
    //     state.playerSelections.push(selections.player);
    //     state.computerSelections.push(selections.computer);
    //     // c. compare and return round winner
    //     // const winner = CompareScores(selections.player, selections.computer);
    //     // d. update scores
    //     // state.roundWinner.push(winner);
    //     // resultsView.displayGameResult(winner);
    //     // e.
    //     activateButtons(state.buttons);
    // }, 600);

    // 4. Handle round results

    // 3. Render selections to UI
    // selectionsView.renderSelections(playerSelection, computerSelection);

    // // 4. Compare scores
    // const winner = CompareScores(playerSelection, computerSelection);

    // // 5. Display Result
    // resultsView.displayGameResult(winner);

    // // 5. Update scores
    // updateScores(winner);

    // // 6. Reset gameBoard
    activateButtons(state.buttons);

    // WinnerCheck();

    // if (state.haveAWinner) {
    //     console.log("YAY WINNER!");
    //     // call winner function
    //     weHaveAWinner();
    // }

    console.log(
        `Inside round controller, current situation: roundNumber: ${state.roundsCount}, playerScore: ${state.playerScore}, computerScore: ${state.computerScore}, haveAWinner: ${state.haveAWinner}`
    );
};

const weHaveAWinner = () => {
    /**
     * show modal that displays winner
     * update color of winner number
     * pop modal which includes 'play again btn'
     * pop modal which has new player 'form'
     */

    // 1. Disable buttons
    disableButtons(state.buttons);

    // 2. Update game result with relevant text
    resultsView.displayGameResult("we have a winner");

    // 3. Color selected player as winner
    resultsView.highlightWinner(state.playerScore, state.computerScore);
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

window.onload = () => {
    elements.loaderBackground.style.display = "none";
    elements.loader.style.display = "none";
};