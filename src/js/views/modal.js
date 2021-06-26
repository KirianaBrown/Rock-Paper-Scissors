import { elements } from "./base";

export const openModal = () => {
    elements.modal.style.display = "flex";
    elements.overlay.style.display = "block";
};

export const closeModal = () => {
    elements.modal.style.display = "none";
    elements.overlay.style.display = "none";
};