import { elements } from "./base";

export const newPlayerFormFeedback = (message) => {
    elements.newPlayerFormSubHeading.textContent = message;
};

export const closeNewPlayerForm = () => {
    function changeDisplay() {
        elements.modal.style.display = "none";
        elements.overlay.style.display = "none";
    }

    setTimeout(() => {
        elements.modal.style.opacity = 0;
        elements.overlay.style.opacity = 0;

        setTimeout(() => {
            changeDisplay();
        }, 1000);
    }, 1000);
};