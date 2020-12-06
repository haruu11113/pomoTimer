// import UUID from "uuid";
import { mainState } from "./mainState";

const state: mainState = new mainState();

const startbutton: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("startButton")
);
startbutton.addEventListener("click", () => {
  state.updateState();
});

const workMinute: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("workMinute")
);
workMinute.addEventListener("change", () => {
  state.changeWorkMinute();
});

const breakMinute: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("breakMinute")
);
breakMinute.addEventListener("change", () => {
  state.changeBreakMinute();
});
