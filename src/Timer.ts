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
        this.makePushPermission();
    }

    updateFinishAt(minute: number): void{
        const now: Date = new Date();
        this.finishAt.setMinutes(now.getMinutes() + minute);
        this.minute = minute;
        this.second = 0;
    }

    startWork(): void {
        const pieElem: HTMLInputElement = <HTMLInputElement>document.getElementById('pie');
        pieElem.className = "pie";
 
        this.timerInterval = setInterval(() => {
            const timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
            const timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');

            if (this.minute == 0 && this.second==0 ){
                this.stopTimer();
                // alert('Break!!!')
                    Push.create("Hello world!", {
                        body: "How's it hangin'?",
                        // icon: 'icon.png',
                        timeout: 4000,
                        // onClick: function () {
                        //     window.focus();
                        //     // this.close();
                        // }
                    });
            } else if (this.second == 0){
                this.minute -= 1;
                this.second = 59;
            }else {
                this.second -= 1;
            }

            timerMinuteElem.innerText = String(this.minute);
            timerSecondElem.innerText = ' : ' + String(this.second);
        },1000);
    }

    startBreak(): void {
        this.timerInterval = setInterval(() => {
            const timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
            const timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');

            if (this.minute == 0 && this.second==0 ){
                this.stopTimer();
                alert('Break!!!')
            } else if (this.second == 0){
               this.minute -= 1;
                this.second = 59;
            }else {
                this.second -= 1;
            }

            timerMinuteElem.innerText = String(this.minute);
            timerSecondElem.innerText = ' : ' + String(this.second);
        },1000);

    }

    stopTimer(): void{
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }

    setTimer(minute: number, stateName: string): void {
        console.log('settimer');
        const startButtonElem: HTMLElement = <HTMLElement>document.getElementById('startButton');
        startButtonElem.innerText = stateName;

        this.updateFinishAt(minute);

        const  timerElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timer');
        timerElem.innerText = String(this.finishAt.getHours()) + ' : ' + String(this.finishAt.getMinutes()) + ' : ' + String(this.finishAt.getSeconds());

        const timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
        const timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');
        timerMinuteElem.innerText = String(this.minute);
        timerSecondElem.innerText = ' : ' + String(this.second);
    }

    makePushPermission(): void {
        Push.create("Hello world!", {
            body: "How's it hangin'?",
            // icon: 'icon.png',
            timeout: 4000,
            // onClick: function () {
            //     window.focus();
            //     // this.close();
            // }
        });
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }
}
