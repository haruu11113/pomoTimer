"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var push_js_1 = __importDefault(require("push.js"));
var Timer = /** @class */ (function () {
    function Timer(minute) {
        this.finishAt = new Date();
        this.finishAt.setMinutes(this.finishAt.getMinutes() + minute);
        this.minute = minute;
        this.second = 0;
        this.timerInterval = null;
        this.isPush = false;
        this.makePushPermission();
    }
    Timer.prototype.updateFinishAt = function (minute) {
        var now = new Date();
        this.finishAt.setMinutes(now.getMinutes() + minute);
        this.minute = minute;
        this.second = 0;
    };
    Timer.prototype.startWork = function () {
        var _this = this;
        var pieElem = document.getElementById('pie');
        pieElem.className = "pie";
        this.timerInterval = setInterval(function () {
            var timerMinuteElem = document.getElementById('timerMinute');
            var timerSecondElem = document.getElementById('timerSecond');
            if (_this.minute == 0 && _this.second == 0) {
                _this.stopTimer();
                // alert('Break!!!')
                push_js_1.default.create("Hello world!", {
                    body: "How's it hangin'?",
                    // icon: 'icon.png',
                    timeout: 4000,
                });
            }
            else if (_this.second == 0) {
                _this.minute -= 1;
                _this.second = 59;
            }
            else {
                _this.second -= 1;
            }
            timerMinuteElem.innerText = String(_this.minute);
            timerSecondElem.innerText = ' : ' + String(_this.second);
        }, 1000);
    };
    Timer.prototype.startBreak = function () {
        var _this = this;
        this.timerInterval = setInterval(function () {
            var timerMinuteElem = document.getElementById('timerMinute');
            var timerSecondElem = document.getElementById('timerSecond');
            if (_this.minute == 0 && _this.second == 0) {
                _this.stopTimer();
                alert('Break!!!');
            }
            else if (_this.second == 0) {
                _this.minute -= 1;
                _this.second = 59;
            }
            else {
                _this.second -= 1;
            }
            timerMinuteElem.innerText = String(_this.minute);
            timerSecondElem.innerText = ' : ' + String(_this.second);
        }, 1000);
    };
    Timer.prototype.stopTimer = function () {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    };
    Timer.prototype.setTimer = function (minute, stateName) {
        console.log('settimer');
        var startButtonElem = document.getElementById('startButton');
        startButtonElem.innerText = stateName;
        this.updateFinishAt(minute);
        var timerElem = document.getElementById('timer');
        timerElem.innerText = String(this.finishAt.getHours()) + ' : ' + String(this.finishAt.getMinutes()) + ' : ' + String(this.finishAt.getSeconds());
        var timerMinuteElem = document.getElementById('timerMinute');
        var timerSecondElem = document.getElementById('timerSecond');
        timerMinuteElem.innerText = String(this.minute);
        timerSecondElem.innerText = ' : ' + String(this.second);
    };
    Timer.prototype.makePushPermission = function () {
        push_js_1.default.create("Hello world!", {
            body: "How's it hangin'?",
            // icon: 'icon.png',
            timeout: 4000,
        });
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    };
    return Timer;
}());
exports.Timer = Timer;
