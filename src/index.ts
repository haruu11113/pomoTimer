// import UUID from "uuid";
import { State } from "./State";

const state: State = new State();

var startbutton: HTMLInputElement = <HTMLInputElement>document.getElementById("startButton");
startbutton.addEventListener('click', () => {
    state.updateState();
});

// startbutton.addEventListener('load', () => {
//     state.updateState();
// });
