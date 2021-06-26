import { promise } from "nice-try";
import { elements } from "./base";

export const renderPending = (playerOption) => {
    elements.container_controls.style.display = "none";

    const html = `
        <div class="container-pending--container">
            <h2 class="container-pending--heading ">You Picked</h2>
            <button class="container-pending--button ${playerOption}"><img src="img/icon-${playerOption}.svg" alt="image of ${playerOption}">  
            </button>
        </div> 
        <div class="container-results--container">
                
            </div>
        <div class="container-pending--container">
            <h2 class="container-pending--heading ">The House Picked</h2>
            <button class="container-pending--button pending"></button>
        </div>     
    `;

    elements.container_pending.insertAdjacentHTML("afterbegin", html);
    elements.container_pending.style.display = "flex";
};

export const renderComputerScore = (seconds, computerScore) => {
    const markup = `
    <div class="container-pending--container">
             <h2 class="container-pending--heading ">The House Picked</h2>
             <button class="container-pending--button ${computerScore} animate-in"><img src="img/icon-${computerScore}.svg" alt="image of ${computerScore}">
             </button>
         </div>
  
  `;
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("In the promise");
            resolve();
            elements.container_pending.removeChild(
                elements.container_pending.lastElementChild
            );
            elements.container_pending.insertAdjacentHTML("beforeend", markup);
        }, seconds);
    });
};

export const renderResult = (result) => {
    const container = document.querySelector(".container-results--container");
    container.classList.add("animate-in-title");

    let message = "";

    if (result === "draw") {
        message = "It's a draw";
    } else {
        message = result === "player" ? "You Win" : "Computer Wins";
    }

    const html = `
    <h2 class="container-results--heading result-winner ">${message}</h2>
    <button class="game-buttons--play_again">Play Again </button>
  `;

    setTimeout(() => {
        container.insertAdjacentHTML("afterbegin", html);
    }, 1500);
};