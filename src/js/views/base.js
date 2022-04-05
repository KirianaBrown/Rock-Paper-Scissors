export const elements = {
    start_game: document.querySelector(".game-buttons--start"),
    new_game: document.querySelector(".game-buttons--new"),

    score: document.querySelector(".container-score--score"),
    container_controls: document.querySelector(".container-controls"),
    container_pending: document.querySelector(".container-pending"),
    rules_btn: document.querySelector(".game-buttons--rules"),
    modal: document.querySelector(".modal"),
    overlay: document.querySelector(".modal-overlay"),
    /* New Player Forms */
    newPlayerFormButton: document.querySelector(".modal-form--button"),
    newPlayerFormInput: document.querySelector(".modal-form--input"),
    newPlayerForm: document.querySelector(".modal-form"),
    newPlayerFormSubHeading: document.querySelector(".modal-heading--sub"),

    // Loader
    loaderBackground: document.querySelector(".loader-bg"),
    loader: document.querySelector(".loader"),
};

export const optionElements = {
    // gameElements
    rock: document.querySelector(".option-01"),
    paper: document.querySelector(".option-02"),
    scissors: document.querySelector(".option-03"),
};

export const resetUi = (isPlaying) => {
    if (isPlaying) {
        elements.container_pending.innerHTML = "";
        elements.container_pending.style.display = "none";
        elements.container_controls.style.display = "flex";
    }
};

export const setActionButtons = (isPlaying) => {
    const options = [elements.rock, elements.paper, elements.scissors];
    isPlaying
        ?
        options.forEach((el) => {
            el.parentNode.classList.remove("disabled");
        }) :
        options.forEach((el) => {
            el.parentNode.classList.add("disabled");
        });
};