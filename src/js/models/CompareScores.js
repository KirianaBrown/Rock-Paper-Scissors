const CompareScores = (player, computer) => {
    if (player === computer) {
        return "draw";
    } else {
        let winner = "";

        if (player === 0) {
            winner = computer === 1 ? "computer" : "player";
        }

        if (player === 1) {
            winner = computer === 2 ? "computer" : "player";
        }

        if (player === 2) {
            winner = computer === 0 ? "computer" : "player";
        }

        return winner;
    }
};

export default CompareScores;