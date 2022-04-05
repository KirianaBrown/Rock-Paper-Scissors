export const elements = {
    // Loader
    loaderBackground: document.querySelector(".loader-bg"),
    loader: document.querySelector(".loader"),
    // Modal Form
    modal: document.querySelector(".modal"),
    overlay: document.querySelector(".modal-overlay"),
    /* New Player Forms */
    newPlayerFormButton: document.querySelector(".modal-form--button"),
    newPlayerFormInput: document.querySelector(".modal-form--input"),
    newPlayerForm: document.querySelector(".modal-form"),
    newPlayerFormSubHeading: document.querySelector(".modal-heading--sub"),
    // Game Result
    gameResult: document.querySelector(".result-text"),
};

export const optionElements = {
    // gameElements
    rock: document.querySelector(".option-01"),
    paper: document.querySelector(".option-02"),
    scissors: document.querySelector(".option-03"),
};

export const selectionOptionElements = {
    player: document.querySelector(".game-selection--player"),
    computer: document.querySelector(".game-selection--computer"),
};

export const scoreElements = {
    playerSm: document.querySelector(".score-value--player-sm"),
    computerSm: document.querySelector(".score-value--computer-sm"),
    playerLg: document.querySelector(".score-value--player-lg"),
    computerLg: document.querySelector(".score-value--computer-lg"),
};

export const disableButtons = (options) => {
    options.forEach((option) => {
        option.disabled = true;
        option.classList.remove("options-start-pulse");
    });
};

export const activateButtons = (options) => {
    options.forEach((option) => {
        option.disabled = false;
        option.classList.add("options-start-pulse");
        option.classList.remove("options-selected");
    });
};