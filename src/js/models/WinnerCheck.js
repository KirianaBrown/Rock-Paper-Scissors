import state from "../store/State";

const WinnerCheck = () => {
    const playerScore = state.playerScore;
    const computerScore = state.computerScore;

    if (playerScore === 3 || computerScore === 3) {
        state.haveAWinner = true;
        return true;
    }
    return false;
};

export default WinnerCheck;