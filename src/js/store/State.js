/**
 * Game options
 * Current Round number
 * If game is live
 * have a winner?
 * current player score
 * current computer score
 * current round result
 */

const state = {
    options: ["rock", "paper", "scissors"],
    buttons: [],
    playerSelection: 0,
    computerSelection: 0,
    gameResult: "",
    playerScore: 0,
    computerScore: 0,
    isGamePlaying: false,
    roundsCount: 0,
    haveAWinner: false,
    imgLg: ["rock-lg.svg", "paper-lg.svg", "scissors-lg.svg"],
    roundResults: [],
};

export default state;