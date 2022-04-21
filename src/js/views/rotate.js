import state from "../store/State";
import { selectionOptionElements } from "./base";

export const rotateImages = () => {
    const index = Math.floor(Math.random() * state.imgLg.length);
    const src = state.imgLg[index];

    selectionOptionElements.playerImage.src = `../static/img/${src}`;
    selectionOptionElements.computerImage.src = `../static/img/${src}`;
};