import { Timer } from "./Timer";

export enum stateList {
    INIT,
    WORKING,
    WORKED,
    BREAKING,
    BREAKED
}

export class mainState {
    public state: number;
    public timer: Timer;
    constructor () {
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
            this.state += 1
        }
        this.updateView();
    }
    changeWorkMinute(): void {
        if (this.state == stateList.INIT ||
            this.state == stateList.BREAKED)
        {
            const workMinuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('workMinute');
            this.resetTimer(workMinuteFormElem);
        } else {
            console.log('can not');
        }
    }

    changeBreakMinute(): void {
        if (this.state == stateList.WORKED)
        {
            const breakMinuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('breakMinute');
            this.resetTimer(breakMinuteFormElem);
        } else {
            console.log('can not');
        }
    }

    resetTimer(minuteFormElem: HTMLInputElement): void {
        this.timer.setTimer(parseInt(minuteFormElem.value));
        this.timer.setButton('start work')
    }

    private updateView(): void {
        this.timer.stopTimer();
        if (this.state == stateList.INIT){
            const minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value));
            this.timer.setButton('start work')

        } else if (this.state == stateList.WORKING) {
            const minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value));
            this.timer.setButton('stop')
            this.timer.startWork();

        } else if (this.state == stateList.WORKED) { 
            const minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('breakMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value));
            this.timer.setButton('start break')

        } else if (this.state == stateList.BREAKING) {
            const minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('breakMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value));
            this.timer.setButton('stop')
            this.timer.startBreak();

        } else if (this.state == stateList.BREAKED) {
            const minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value));
            this.timer.setButton('start work')

        } else {
            console.log('は?');
        } 

        console.log(this.state);
    }
}
