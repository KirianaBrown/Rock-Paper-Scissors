export const elements = {
    start_game: document.querySelector(".game-buttons--start"),
    new_game: document.querySelector(".game-buttons--new"),
    rock: document.querySelector(".rock"),
    paper: document.querySelector(".paper"),
    scissors: document.querySelector(".scissors"),
    score: document.querySelector(".container-score--score"),
    container_controls: document.querySelector(".container-controls"),
    container_pending: document.querySelector(".container-pending"),
};

export const resetUi = (isPlaying) => {
    if (isPlaying) {
        elements.container_pending.innerHTML = "";
        elements.container_controls.style.display = "flex";
    }
};

export const setActionButtons = (isPlaying) => {
    if (isPlaying) {
        elements.rock.parentNode.classList.remove("disabled");
        elements.paper.parentNode.classList.remove("disabled");
        elements.scissors.parentNode.classList.remove("disabled");
    } else {
        elements.rock.parentNode.classList.add("disabled");
        elements.paper.parentNode.classList.add("disabled");
        elements.scissors.parentNode.classList.add("disabled");
    }
};