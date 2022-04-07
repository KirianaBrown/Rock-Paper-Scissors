export const createModal = (gameResults) => {
    console.log(gameResults);

    // roundResults {player: 'rock', computer:'paper', winner:'computer'}
    // computerTotal
    // playerTotal

    let roundResults = [];

    const winner =
        gameResults.computerTotal > gameResults.playerTotal ? "computer" : "player";

    let html = `
        <div class="results-modal-overlay ${
          winner === "player"
            ? "results-modal-overlay_won"
            : "results-modal-overal_lost"
        }"></div>
        <div class="results-modal ${
          winner === "player" ? "results-modal_won" : "results-moda_lost"
        } ">
            <h1 class="results-modal--heading">${
              winner === "computer" ? "You LOST!" : "YOU WON"
            }</h1>
            <ul>
               ${gameResults.roundResults.map((el, index) =>
                 createListEl(el, index)
               )}
            </ul>
            <button>Play Again</button>
            <button>New Player </button>
        </div>
    `;
    const el = document.body;

    el.insertAdjacentHTML("afterbegin", html);
};

const createListEl = (result, index) => {
    let html;

    if (result.winner === "draw") {
        html = `
        <li>Round: ${index + 1} ${result.player} vs ${
      result.computer
    } - Draw </li>
        `;
    } else {
        const winningHand =
            result.winner === "player" ? result.player : result.computer;

        const losingHand =
            result.winner === "player" ? result.computer : result.player;

        html = `
            <li> Round: ${
              index + 1
            } ${winningHand} beat ${losingHand} - Winner: ${result.winner}</li>
            `;
    }

    return html;
};