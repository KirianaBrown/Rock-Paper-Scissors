export const elements = {
    // Modal Form
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

export const selectionOptionElements = {
    player: document.querySelector(".game-selection--player"),
    computer: document.querySelector(".game-selection--computer"),
};

export const disableButtons = (options) => {
    options.forEach((option) => {
        option.disabled = true;
        option.classList.remove("options-start-pulse");
    });
};