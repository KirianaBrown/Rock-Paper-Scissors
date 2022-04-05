import {
    elements,
    optionElements,
    setActionButtons,
    resetUi,
} from "./views/base";
import { renderScore } from "./views/scores";
import * as resultsView from "./views/results";
import * as modalView from "./views/modal";
import * as formView from "./views/form";
import Computer from "./models/Computer";
import CompareScores from "./models/CompareScores";
import NewGameValidation from "./models/NewGameValidation";
import PlayerSelection from "./models/PlayerSelection";

// IMPORT STYLESHEETS
import "../sass/main.scss";

const options = ["rock", "paper", "scissors"];

const state = {
    currentScore: 0,
    computerSelection: 0,
    playerSelection: 0,
    computerWins: true,
    gameIsPlaying: false,
    result: "it's a tie",
    playerName: "",
    playerScore: 0,
    computerScore: 0,
};

const gamePlayController = () => {
    if (state.gameIsPlaying) {
        console.log("Game play is LIVE");
        // 1. Get player selection
        const playerSelection = state.playerSelection;

        // 2. Get computer selection

        // 3. Compare scores

        // 4. Update scores
    } else {
        console.log("Game play is NOT live");
    }
};

// const uiPlayController = () => {
//     if (state.gameIsPlaying) {}
// };

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
    // Set state variables
    state.playerName = playerName;
    state.gameIsPlaying = true;
    // Close new player form
    formView.closeNewPlayerForm();
    // Start game
    gamePlayController();
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

const { rock, paper, scissors } = optionElements;
const optionsArr = [rock, paper, scissors];

const disableButtons = () => {
    // rock.disabled = true;
    // paper.disabled = true;
    // scissors.disabled = true;

    optionsArr.forEach((el) => {
        el.disabled = true;
        el.classList.remove("options-start-pulse");
    });
};

optionsArr.forEach((el) => {
    el.addEventListener("click", (e) => {
        // Set state player value
        state.playerSelection = el.value;
        // disable selections
        disableButtons();
        // Add selected class
        el.classList.add("options-selected");
    });
});

elements.newPlayerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    verifyNewGame();
});

window.onload = (event) => {
    elements.loaderBackground.style.display = "none";
    elements.loader.style.display = "none";
};

// Event listeners
// elements.start_game.addEventListener("click", (e) => {
//     if (!state.gameIsPlaying) {
//         state.gameIsPlaying = true;
//         elements.start_game.textContent = "end game";
//         elements.start_game.style.background = "grey";
//         uiController();
//     } else {
//         state.gameIsPlaying = false;
//         elements.start_game.textContent = "start game";
//         elements.start_game.style.background = "blueviolet";
//         resetUi(true);
//         uiController();
//         setActionButtons(state.gameIsPlaying);
//     }
// });

// elements.container_pending.addEventListener("click", (e) => {
//     if (e.target.classList.contains("game-buttons--play_again")) {
//         playAgainController();
//     } else {
//         return;
//     }
// });