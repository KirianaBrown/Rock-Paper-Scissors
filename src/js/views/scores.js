import { elements } from "./base";

export const renderScore = (state) => {
    elements.score.innerHTML = state.currentScore;
};