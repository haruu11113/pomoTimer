import { Timer } from "./Timer";

export enum stateList {
  INIT,
  WORKING,
  WORKED,
  BREAKING,
  BREAKED,
}

export class mainState {
  public state: stateList;
  public timer: Timer;
  // private workMinuteFormElem: HTMLInputElement;
  // private breakMinuteFormElem: HTMLInputElement;

  constructor() {
    this.state = stateList.INIT;
    this.timer = new Timer(25);
    this.updateView();
  }

  initState(): void {
    this.state = stateList.INIT;
    this.updateView();
  }

  updateState(): void {
    if (this.state == stateList.BREAKED) {
      this.state = stateList.WORKING;
    } else {
      this.state += 1;
    }
    this.updateView();
  }

  changeWorkMinute(): void {
    const workMinuteFormElem: HTMLInputElement = <HTMLInputElement>(
      document.getElementById("workMinute")
    );
    if (this.state == stateList.INIT || this.state == stateList.BREAKED) {
      this.resetTimer(workMinuteFormElem);
    } else {
      console.log("can not");
    }
  }

  changeBreakMinute(): void {
    const breakMinuteFormElem: HTMLInputElement = <HTMLInputElement>(
      document.getElementById("breakMinute")
    );
    if (this.state == stateList.WORKED) {
      this.resetTimer(breakMinuteFormElem);
    } else {
      console.log("can not");
    }
  }

  resetTimer(minuteFormElem: HTMLInputElement): void {
    this.timer.setTimer(parseInt(minuteFormElem.value));
    this.timer.setButton("start work");
  }

  private updateView(): void {
    const workMinuteFormElem: HTMLInputElement = <HTMLInputElement>(
      document.getElementById("workMinute")
    );
    const breakMinuteFormElem: HTMLInputElement = <HTMLInputElement>(
      document.getElementById("breakMinute")
    );
    this.timer.stopTimer();
    switch (this.state) {
      case stateList.INIT:
        this.timer.setTimer(parseInt(workMinuteFormElem.value));
        this.timer.setButton("start work");
        break;
      case stateList.WORKING:
        this.timer.setTimer(parseInt(workMinuteFormElem.value));
        this.timer.setButton("stop");
        this.timer.startWork();
        break;
      case stateList.WORKED:
        this.timer.setTimer(parseInt(breakMinuteFormElem.value));
        this.timer.setButton("start break");
        break;
      case stateList.BREAKING:
        this.timer.setTimer(parseInt(breakMinuteFormElem.value));
        this.timer.setButton("stop");
        this.timer.startBreak();
        break;
      case stateList.BREAKED:
        this.timer.setTimer(parseInt(workMinuteFormElem.value));
        this.timer.setButton("start work");
        break;
      default:
        console.log("は?");
    }
    console.log(this.state);
  }
}
