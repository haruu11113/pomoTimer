"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainState = exports.stateList = void 0;
var Timer_1 = require("./Timer");
var stateList;
(function (stateList) {
    stateList[stateList["INIT"] = 0] = "INIT";
    stateList[stateList["WORKING"] = 1] = "WORKING";
    stateList[stateList["WORKED"] = 2] = "WORKED";
    stateList[stateList["BREAKING"] = 3] = "BREAKING";
    stateList[stateList["BREAKED"] = 4] = "BREAKED";
})(stateList = exports.stateList || (exports.stateList = {}));
var mainState = /** @class */ (function () {
    // private workMinuteFormElem: HTMLInputElement;
    // private breakMinuteFormElem: HTMLInputElement;
    function mainState() {
        this.state = stateList.INIT;
        this.timer = new Timer_1.Timer(25);
        this.updateView();
    }
    mainState.prototype.initState = function () {
        this.state = stateList.INIT;
        this.updateView();
    };
    mainState.prototype.updateState = function () {
        if (this.state == stateList.BREAKED) {
            this.state = stateList.WORKING;
        }
        else {
            this.state += 1;
        }
        this.updateView();
    };
    mainState.prototype.changeWorkMinute = function () {
        var workMinuteFormElem = (document.getElementById("workMinute"));
        if (this.state == stateList.INIT || this.state == stateList.BREAKED) {
            this.resetTimer(workMinuteFormElem);
        }
        else {
            console.log("can not");
        }
    };
    mainState.prototype.changeBreakMinute = function () {
        var breakMinuteFormElem = (document.getElementById("breakMinute"));
        if (this.state == stateList.WORKED) {
            this.resetTimer(breakMinuteFormElem);
        }
        else {
            console.log("can not");
        }
    };
    mainState.prototype.resetTimer = function (minuteFormElem) {
        this.timer.setTimer(parseInt(minuteFormElem.value));
        this.timer.setButton("start work");
    };
    mainState.prototype.updateView = function () {
        var workMinuteFormElem = (document.getElementById("workMinute"));
        var breakMinuteFormElem = (document.getElementById("breakMinute"));
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
    };
    return mainState;
}());
exports.mainState = mainState;
