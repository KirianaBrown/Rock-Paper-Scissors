import { selectionOptionElements } from "./base";
export const animateRoundWinner = (winner) => {
    if (winner === "draw") return;

    const el =
        winner === "player" ?
        selectionOptionElements.player :
        selectionOptionElements.computer;

    el.animate(
        [
            // keyframes
            { transform: "scale(1.4, 1.4) translateY(0)" },
            { transform: "scale(1.1, 0.9) translateY(0)" },
            { transform: "scale(0.9, 1.1) translateY(-100px)" },
            { transform: "scale(1.05, 0.95) translateY(0)" },
            { transform: "scale(1, 1) translateY(-7px)" },
            { transform: "scale(1, 1) translateY(0)" },
            { transform: "scale(1, 1) translateY(0)" },
        ], {
            // tiempos
            duration: 600,
            iterations: 1,
            easing: "ease-out",
        }
    );
};