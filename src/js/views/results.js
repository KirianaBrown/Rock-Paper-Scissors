import { elements } from "./base";

export const renderPending = (playerOption) => {
    console.log(playerOption);
    elements.container_controls.style.display = "none";
    elements.container_pending.style.display = "flex";
};