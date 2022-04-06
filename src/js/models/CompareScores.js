const CompareScores = (selections) => {
    const { player, computer } = selections;

    if (player === computer) {
        return "draw";
    } else {
        let winner = "";

        if (player === "rock") {
            winner = computer === "paper" ? "computer" : "player";
        }

        if (player === "paper") {
            winner = computer === "scissors" ? "computer" : "player";
        }

        if (player === "scissors") {
            winner = computer === "rock" ? "computer" : "player";
        }

        return winner;
    }
};

export default CompareScores;