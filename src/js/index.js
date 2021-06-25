import { elements, setActionButtons, resetUi } from "./views/base";
import { renderScore } from "./views/scores";
import * as resultsView from "./views/results";
import * as modalView from "./views/modal";
import Computer from "./models/Computer";

// IMPORT STYLESHEETS
import "../sass/main.scss";

const options = ["rock", "paper", "scissors"];

const state = {
    currentScore: 0,
    computerSelection: 0,
    playerSelection: 0,
    computerWins: true,
    gameIsPlaying: false,
    result: "computer",
};

const gameController = () => {
    if (state.gameIsPlaying) {
        // 1. Get player selection
        const playerSelection = options[state.playerSelection];
        resultsView.renderPending(playerSelection);

        // 2. Get computer selection
        state.computerSelection = Computer();
        const computerSelection = options[state.computerSelection];
        // resultsView.renderComputerScore(computerSelection);
        resultsView.renderComputerScore(500, computerSelection).then(() => {
            console.log("finished timeout");

            // 3. Compare scores
            state.result = compareScores(
                state.playerSelection,
                state.computerSelection
            );

            resultsView.renderResult(state.result);

            console.log(state.result);

            // 4. If computer wins then remove 1 from total
            if (state.result === "draw") {
                return;
            } else {
                state.result === "player" ? state.currentScore++ : state.currentScore--;
            }
            renderScore(state);
        });
    }
};

const playAgainController = () => {
    console.log("playing another round");
    console.log("reset ui to display only the action buttons");
    resetUi(state.gameIsPlaying);
};

const uiController = () => {
    if (state.gameIsPlaying) {
        // 0. Reset UI score
        renderScore(state);
        // 1. Set action buttons to active state
        setActionButtons(state.gameIsPlaying);
    } else {
        state.currentScore = 0;
        state.playerSelection = 0;
        state.computerSelection = 0;
        renderScore(state);
        setActionButtons(state.gameIsPlaying);
    }
};

const playerSelected = (option) => {
    if (state.gameIsPlaying) {
        state.playerSelection = option;
    }
};

const compareScores = (player, computer) => {
    if (player === computer) {
        return "draw";
    }
    let winner = "";

    winner = player === 0 && computer !== 1 ? "player" : "computer";

    winner = player === 1 && computer !== 2 ? "player" : "computer";

    winner = player === 2 && computer !== 0 ? "player" : "computer";

    return winner;
};

// Event listeners
elements.start_game.addEventListener("click", (e) => {
    if (!state.gameIsPlaying) {
        state.gameIsPlaying = true;
        elements.start_game.textContent = "end game";
        elements.start_game.style.background = "grey";
        uiController();
    } else {
        state.gameIsPlaying = false;
        elements.start_game.textContent = "start game";
        elements.start_game.style.background = "blueviolet";
        resetUi(true);
        uiController();
        setActionButtons(state.gameIsPlaying);
    }
});

elements.rock.addEventListener("click", (e) => {
    playerSelected(0);
    gameController();
});
elements.paper.addEventListener("click", (e) => {
    playerSelected(1);
    gameController();
});
elements.scissors.addEventListener("click", (e) => {
    playerSelected(2);
    gameController();
});

elements.container_pending.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("game-buttons--play_again")) {
        playAgainController();
    } else {
        return;
    }
});

elements.rules_btn.addEventListener("click", (e) => {
    modalView.openModal();
});

elements.modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-close")) {
        modalView.closeModal();
    }
});