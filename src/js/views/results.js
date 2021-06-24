import { elements } from "./base";

export const renderPending = (playerOption, computerOption) => {
    elements.container_controls.style.display = "none";

    const html = `
        <div class="container-pending--container">
            <h2 class="container-pending--heading ">You Picked</h2>
            <button class="container-pending--button ${playerOption}"><img src="img/icon-${playerOption}.svg" alt="image of ${playerOption}">  
            </button>
        </div> 
        <div class="container-pending--container">
            <h2 class="container-pending--heading ">The House Picked</h2>
            <button class="container-pending--button pending"></button>
        </div>     
    `;
    const markup = `
    <div class="container-pending--container">
            <h2 class="container-pending--heading ">The House Picked</h2>
            <button class="container-pending--button ${computerOption} animate-in"><img src="img/icon-${computerOption}.svg" alt="image of ${computerOption}">  
            </button>
        </div>
    `;
    elements.container_pending.insertAdjacentHTML("afterbegin", html);
    elements.container_pending.style.display = "flex";

    setTimeout(() => {
        elements.container_pending.removeChild(
            elements.container_pending.lastElementChild
        );
        elements.container_pending.insertAdjacentHTML("beforeend", markup);
    }, 1000);
};