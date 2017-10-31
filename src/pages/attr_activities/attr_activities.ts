import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-attr_activities',
  templateUrl: 'attr_activities.html'
})
export class Attr_activitiesPage {

  title: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let item = this.navParams.get('item')
    this.title = item.title;
  }

}
