import { elements } from "./views/base";

// IMPORT STYLESHEETS
import "../sass/main.scss";

const state = {
    currentScore: 0,
    computerSelection: 0,
    playerSelection: 0,
    computerWins: true,
    gameIsPlaying: true,
};

const gameController = (selected) => {
    if (state.gameIsPlaying) {
        // Hide start game button
        // record users selection
        const playerSelection = selected;
        console.log(playerSelection);
        // once selected "freeze" other buttons
        // random generate for computer (1,2,3)
        // compare results
        // display results
    } else {
        console.log("Start Game");
    }
};

// Event listeners
elements.rock.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("rock is selected");
    gameController("rock");
});
elements.paper.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("paper is selected");
    gameController("paper");
});
elements.scissors.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("scissors is selected");
    gameController("scissors");
});