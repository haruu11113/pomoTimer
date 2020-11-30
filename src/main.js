// import UUID from "uuid";
import { mainState } from "./mainState";

const state: mainState = new mainState();

var startbutton: HTMLInputElement = <HTMLInputElement>document.getElementById("startButton");
startbutton.addEventListener('click', () => {
    state.updateState();
});

// startbutton.addEventListener('load', () => {
//     state.updateState();
// });
