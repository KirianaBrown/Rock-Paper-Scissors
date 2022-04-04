import { elements } from "./base";

export const newPlayerFormFeedback = (message) => {
    elements.newPlayerFormSubHeading.textContent = message;
};

export const closeNewPlayerForm = () => {
    setTimeout(() => {
        elements.modal.style.opacity = 0;
        elements.overlay.style.opacity = 0;
    }, 1500);
};