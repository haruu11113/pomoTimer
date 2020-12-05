"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.stateList = void 0;
var Timer_1 = require("./Timer");
var stateList;
(function (stateList) {
    stateList[stateList["INIT"] = 0] = "INIT";
    stateList[stateList["WORKING"] = 1] = "WORKING";
    stateList[stateList["WORKED"] = 2] = "WORKED";
    stateList[stateList["BREAKING"] = 3] = "BREAKING";
    stateList[stateList["BREAKED"] = 4] = "BREAKED";
})(stateList = exports.stateList || (exports.stateList = {}));
var State = /** @class */ (function () {
    function State() {
        this.state = stateList.INIT;
        this.timer = new Timer_1.Timer(25);
        this.updateView();
    }
    State.prototype.initState = function () {
        this.state = stateList.INIT;
        this.updateView();
    };
    State.prototype.updateState = function () {
        if (this.state == stateList.BREAKED) {
            this.state = stateList.WORKING;
        }
        else {
            this.state += 1;
        }
        this.updateView();
    };
    State.prototype.updateView = function () {
        this.timer.stopTimer();
        if (this.state == stateList.INIT) {
            var minuteFormElem = document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'start work');
        }
        else if (this.state == stateList.WORKING) {
            var minuteFormElem = document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'stop');
            this.timer.startWork();
        }
        else if (this.state == stateList.WORKED) {
            var minuteFormElem = document.getElementById('breakMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'start break');
        }
        else if (this.state == stateList.BREAKING) {
            var minuteFormElem = document.getElementById('breakMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'stop');
            this.timer.startBreak();
        }
        else if (this.state == stateList.BREAKED) {
            var minuteFormElem = document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'start work');
        }
        else {
            console.log('は?');
        }
        console.log(this.state);
    };
    return State;
}());
exports.State = State;
