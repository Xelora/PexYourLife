import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ITimer} from "./itimer";

@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html'
})
export class TimerPage {
  timersec: number;
  public timer: ITimer;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.timersec = this.navParams.get('time');
    this.initTimer();
  }

  initTimer() {
    this.timer = <ITimer> {
      seconds: this.timersec,
      runTimer: true,
      hasStarted: true,
      hasFinished: false,
      secondsRemaining: this.timersec
    };
    this.timer.displayTime = TimerPage.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    this.timerTick();
  }

  resumeTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  stopTimer() {
    this.timer.seconds = 0;
    this.timer.hasStarted = false;
    this.timer.runTimer= false;
    this.timer.hasFinished = true;
    this.timer.secondsRemaining = 0;
    this.timer.displayTime = TimerPage.getSecondsAsDigitalClock(this.timer.secondsRemaining)
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = TimerPage.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  static getSecondsAsDigitalClock(inputSeconds: number) {
    let sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    let hoursString = (hours < 10) ? "0" + hours : hours.toString();
    let minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    let secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }
}
