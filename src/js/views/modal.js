import { elements } from "./base";

export const openModal = () => {
    elements.modal.style.display = "flex";
};

export const closeModal = () => {
    elements.modal.style.display = "none";
};