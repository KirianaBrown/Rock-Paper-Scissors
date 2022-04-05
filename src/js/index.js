import state from "./store/State";
import { elements, optionElements, disableButtons } from "./views/base";
import { renderScore } from "./views/scores";
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
        console.log("Game play is LIVE");
        // 1. Get player selection
        const playerSelection = state.options[+state.playerSelection];
        console.log(playerSelection);

        // 2. Get computer selection
        const computerSelection = state.options[Computer()];
        console.log(computerSelection);

        // 3. Render selections to UI
        selectionsView.renderSelections(playerSelection, computerSelection);

        // 4. Compare scores
        const winner = CompareScores(playerSelection, computerSelection);
        console.log(winner);

        // 5. Update scores
    } else {
        console.log("Game play is NOT live");
    }
};

// const gameController = () => {
//     if (state.gameIsPlaying) {
//         // 1. Get player selection
//         const playerSelection = options[state.playerSelection];
//         resultsView.renderPending(playerSelection);

//         // 2. Get computer selection
//         state.computerSelection = Computer();
//         const computerSelection = options[state.computerSelection];

//         resultsView.renderComputerScore(500, computerSelection).then(() => {
//             // 3. Compare scores
//             state.result = CompareScores(
//                 state.playerSelection,
//                 state.computerSelection
//             );

//             resultsView.renderResult(state.result);

//             // 4. If computer wins then remove 1 from total
//             if (state.result === "draw") {
//                 return;
//             } else {
//                 state.result === "player" ?
//                     (state.currentScore += 5) :
//                     state.currentScore--;
//             }
//             renderScore(state);
//         });
//     }
// };

// const playAgainController = () => {
//     resetUi(state.gameIsPlaying);
// };

// const uiController = () => {
//     if (state.gameIsPlaying) {
//         // 0. Reset UI score
//         renderScore(state);
//         // 1. Set action buttons to active state
//         setActionButtons(state.gameIsPlaying);
//     } else {
//         state.currentScore = 0;
//         state.playerSelection = 0;
//         state.computerSelection = 0;
//         renderScore(state);
//         setActionButtons(state.gameIsPlaying);
//     }
// };

// const playerSelected = (option) => {
//     if (state.gameIsPlaying) {
//         state.playerSelection = option;
//     }
// };

const startNewGame = (playerName) => {
    /*  
              1. Set state playerName, close new player form and set up player selection board
          */
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
    const optionsArr = [rock, paper, scissors];

    // Set and handle event listeners on each option
    optionsArr.forEach((el) => {
        el.addEventListener("click", (e) => {
            // Set state
            state.playerSelection = el.value;
            // Handle display props of btns
            disableButtons(optionsArr);
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