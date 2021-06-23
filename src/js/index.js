import { elements, setActionButtons } from "./views/base";
import { renderScore } from "./views/scores";
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
        // 2. Get computer selection
        state.computerSelection = Computer();
        // 3. Compare scores
        state.result = compareScores(
            state.playerSelection,
            state.computerSelection
        );
        // 4. If player wins add 5 to total
        console.log(state.playerSelection, state.computerSelection, state.result);
        // 5. If computer wins then remove 1 from total
        if (state.result === "draw") {
            return;
        } else {
            state.result === "player" ? state.currentScore++ : state.currentScore--;
        }

        renderScore(state);
    }
};

const uiController = () => {
    if (state.gameIsPlaying) {
        // 0. Reset UI score
        renderScore(state);
        // 1. Set action buttons to active state
        setActionButtons(state.gameIsPlaying);
    } else {
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

    if (player === 0) {
        if (computer === 1) {
            winner = "computer";
        } else {
            winner = "player";
        }
    }

    if (player === 1) {
        if (computer === 0) {
            winner = "player";
        } else {
            winner = "computer";
        }
    }

    if (player === 2) {
        if (computer === 0) {
            winner = "computer";
        } else {
            winner = "player";
        }
    }

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