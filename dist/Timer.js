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
        this.makeNotice("Let's do our best.", "");
    }
    Timer.prototype.updateFinishAt = function (minute) {
        var now = new Date();
        this.finishAt.setMinutes(now.getMinutes() + minute);
        this.minute = minute;
        this.second = 0;
    };
    Timer.prototype.startWork = function () {
        var timerMinuteElem = (document.getElementById("timerMinute"));
        var timerSecondElem = (document.getElementById("timerSecond"));
        this.startTimer(timerMinuteElem, timerSecondElem, "You need break time", "Break time is finished");
    };
    Timer.prototype.startBreak = function () {
        var timerMinuteElem = (document.getElementById("timerMinute"));
        var timerSecondElem = (document.getElementById("timerSecond"));
        this.startTimer(timerMinuteElem, timerSecondElem, "Do work now!", "Break time is finished");
    };
    Timer.prototype.stopTimer = function () {
        if (this.timerInterval) {
            var pieElem = (document.getElementById("pie"));
            pieElem.classList.remove("pie");
            clearInterval(this.timerInterval);
        }
    };
    Timer.prototype.startTimer = function (tMinElem, tSecElem, title, body) {
        var _this = this;
        var pieElem = (document.getElementById("pie"));
        pieElem.className = "pie";
        this.timerInterval = setInterval(function () {
            if (_this.minute == 0 && _this.second == 0) {
                _this.stopTimer();
                _this.makeNotice(title, body);
            }
            else if (_this.second == 0) {
                _this.minute -= 1;
                _this.second = 59;
            }
            else {
                _this.second -= 1;
            }
            tMinElem.innerText = String(_this.minute);
            tSecElem.innerText = " : " + String(_this.second);
        }, 1000);
    };
    Timer.prototype.setButton = function (stateName) {
        console.log("settimer");
        var startButtonElem = (document.getElementById("startButton"));
        startButtonElem.innerText = stateName;
    };
    Timer.prototype.setTimer = function (minute) {
        this.updateFinishAt(minute);
        var timerElem = (document.getElementById("timer"));
        timerElem.innerText =
            String(this.finishAt.getHours()) +
                " : " +
                String(this.finishAt.getMinutes()) +
                " : " +
                String(this.finishAt.getSeconds());
        var timerMinuteElem = (document.getElementById("timerMinute"));
        var timerSecondElem = (document.getElementById("timerSecond"));
        timerMinuteElem.innerText = String(this.minute);
        timerSecondElem.innerText = " : " + String(this.second);
    };
    Timer.prototype.makeNotice = function (t, b, timeout) {
        if (timeout === void 0) { timeout = 4000; }
        push_js_1.default.create(t, {
            body: b,
            timeout: timeout,
        });
    };
    return Timer;
}());
exports.Timer = Timer;
