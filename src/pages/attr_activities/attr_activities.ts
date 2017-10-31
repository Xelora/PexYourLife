import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-attr_activities',
  templateUrl: 'attr_activities.html'
})
export class Attr_activitiesPage {

  hourop: string[];
  listact: string[];
  activities: string[];
  title: string;
  items: Array<{activity: string}>;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let item = this.navParams.get('item');
    this.title = item.title;
    this.listact = item.activities;
    this.activities = item.activities;

    this.hourop = ['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00',
      '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00'];
  }

  getItems(ev: any) {

    this.activities = this.listact;
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.activities = this.activities.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goTimer() {
  }

}
