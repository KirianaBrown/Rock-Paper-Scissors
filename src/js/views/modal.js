export const createModal = (gameResults) => {
    const winner =
        gameResults.computerTotal > gameResults.playerTotal ? "computer" : "player";

    let playerResults = [];
    gameResults.roundResults.forEach((el) => playerResults.push(el.player));

    console.log(playerResults);

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
            <div class="results-modal-round">
              <img src="../img/player.svg" alt="robot icon" class="results-modal-round-icon" />
                ${gameResults.roundResults.map((el) =>
                  generateRoundImage(el, "player")
                )}
            </div>
            <div class="results-modal-round">
                <img src="../img/robot.svg" alt="robot icon" class="results-modal-round-icon" />
                ${gameResults.roundResults.map((el) =>
                  generateRoundImage(el, "computer")
                )}
            </div>

            <button>Play Again</button> 
            <button>New Player </button>
        </div>
    `;
    const el = document.body;

    el.insertAdjacentHTML("afterbegin", html);
    rmTrailingComma();
};

const rmTrailingComma = () => {
    const a = document.querySelectorAll(".roundResult");

    a.forEach((el) => {
        el.parentNode.removeChild(el.nextSibling);
    });
};

const generateRoundImage = (result, who) => {
    let html;

    if (who === "player") {
        if (result.winner === "player") {
            html = ` <img class="results-modal-round-won roundResult" src="../img/${result.player}-sm.svg" alt="${result.player} icon" />
    `;
        } else {
            html = ` <img class="roundResult" src="../img/${result.player}-sm.svg" alt="${result.player} icon" />
    `;
        }
    } else {
        if (result.winner === "computer") {
            html = ` <img class="results-modal-round-won roundResult" src="../img/${result.computer}-sm.svg" alt="${result.computer} icon" />
    `;
        } else {
            html = ` <img class="roundResult" src="../img/${result.computer}-sm.svg" alt="${result.computer} icon" />
    `;
        }
    }

    return html;
};