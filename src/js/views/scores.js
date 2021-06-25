import { elements } from "./base";

export const renderScore = (state) => {
    elements.score.innerHTML = state.currentScore;
    elements.score.classList.add("animate-score");
    setTimeout(() => {
        elements.score.classList.remove("animate-score");
    }, 1000);
};