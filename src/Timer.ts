import Push from 'push.js';
export class Timer {
    public finishAt: Date;
    public minute: number;
    public second: number;
    public timerInterval: NodeJS.Timer | null;
    public isPush: boolean;

    constructor (minute: number) {
        this.finishAt = new Date(); 
        this.finishAt.setMinutes(this.finishAt.getMinutes() + minute);
        this.minute = minute;
        this.second = 0;
        this.timerInterval = null;
        this.isPush = false;
        this.makeNotice("Let's do our best.", "");
    }

    updateFinishAt(minute: number): void{
        const now: Date = new Date();
        this.finishAt.setMinutes(now.getMinutes() + minute);
        this.minute = minute;
        this.second = 0;
    }

   startWork(): void {
        const timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
        const timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');
        this.startTimer(timerMinuteElem, timerSecondElem, 'You need break time', 'Break time is finished');
    }

    startBreak(): void {
        const timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
        const timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');
        this.startTimer(timerMinuteElem, timerSecondElem, 'Do work now!', 'Break time is finished');
    }

    stopTimer(): void {
        if (this.timerInterval) {
            const pieElem: HTMLInputElement = <HTMLInputElement>document.getElementById('pie');
            pieElem.classList.remove("pie");
            clearInterval(this.timerInterval);
        }
    }
    
    startTimer(tMinElem: HTMLInputElement, tSecElem: HTMLInputElement, title: string, body: string): void {
        const pieElem: HTMLInputElement = <HTMLInputElement>document.getElementById('pie');
        pieElem.className = "pie";
 
        this.timerInterval = setInterval(() => {
            if (this.minute == 0 && this.second==0 ){
                this.stopTimer();
                this.makeNotice(title, body);
            } else if (this.second == 0){
                this.minute -= 1;
                this.second = 59;
            }else {
                this.second -= 1;
            }
            tMinElem.innerText = String(this.minute);
            tSecElem.innerText = ' : ' + String(this.second);
        },1000);
    }

    setButton(stateName: string): void {
        console.log('settimer');
        const startButtonElem: HTMLElement = <HTMLElement>document.getElementById('startButton');
        startButtonElem.innerText = stateName;
    }

    setTimer(minute: number): void {
        this.updateFinishAt(minute);

        const  timerElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timer');
        timerElem.innerText = String(this.finishAt.getHours()) + ' : ' + String(this.finishAt.getMinutes()) + ' : ' + String(this.finishAt.getSeconds());

        const timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
        const timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');
        timerMinuteElem.innerText = String(this.minute);
        timerSecondElem.innerText = ' : ' + String(this.second);
    }

    makeNotice(t: string, b: string, timeout= 4000): void {
        Push.create(t, {
            body: b,
            timeout: timeout
        });
    }
}
