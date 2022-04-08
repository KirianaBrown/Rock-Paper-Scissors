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
            : "results-modal-overlay_lost"
        }"></div>
        <div class="results-modal ${
          winner === "player" ? "results-modal_won" : "results-modal_lost"
        } ">
            <h1 class="results-modal-heading">${
              winner === "computer" ? "You LOST!" : "YOU WON"
            }</h1>

            <div class="modal-players">
                <img src="../img/player.svg" alt="Player icon" />
                <p class="modal-heading">VS</p>
                <img src="../img/robot.svg" alt="Robot icon" />
            </div>

            <div class="results-modal-scores">
                <p>${gameResults.playerTotal}</p>
                <p>${gameResults.computerTotal}</p>
            </div>
            <ul>
      
                ${gameResults.roundResults.map((el, i) => createListEl(el, i))}
        
            </ul>

            <button>Play Again</button>
            <button>New Player </button>
        </div>
    `;
    const el = document.body;

    el.insertAdjacentHTML("afterbegin", html);
    rmTrailingComma();
};

const rmTrailingComma = () => {
    const a = document.querySelectorAll(".testing");

    a.forEach((el) => {
        el.parentNode.removeChild(el.nextSibling);
    });
};

const createListEl = (result, i) => {
    console.log(result, i);

    let html;

    if (result.winner === "draw") {
        html = `
        <li class="testing">ROUND: ${i + 1} ${result.player} vs ${
      result.computer
    } - Draw </li>
        `;
    } else {
        html = `
            <li class="testing">ROUND: ${i + 1} ${result.player} ${
      result.winner === "player" ? "beat" : "lost"
    } ${result.computer} - WINNER: ${result.winner} </li>
        `;
    }

    return html;
};