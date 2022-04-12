import { elements } from "../views/base";

let counter = 0;

const formValidation = (input) => {
    counter++;
    return input.trim().length > 0 ?
        {
            valid: true,
            playerName: input.trim().toUpperCase(),
        } :
        {
            valid: false,
            playerName: null,
            counter,
        };
};

const NewGameValidation = () => {
    const input = elements.newPlayerFormInput.value;

    const isValid = formValidation(input);

    return isValid;
};

export default NewGameValidation;