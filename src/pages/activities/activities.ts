import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Attr_activitiesPage} from "../attr_activities/attr_activities";

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {
  icons: string[];
  titles: string[];
  activitiesrand: string[];
  pages: any[];
  items: Array<{title: string, icon: string, activities: string[]}>;

  constructor(public navCtrl: NavController) {

    this.icons = ['football', 'book', 'film', 'brush', 'musical-notes', 'game-controller-b',
      'bonfire', 'moon', 'restaurant', 'people'];

    this.titles = ['Sport', 'Reading', 'Movies', 'Creativity', 'Music', 'Video games',
      'Role Play', 'Sleep', 'Cooking', 'Group'];

    this.activitiesrand = ['Football', 'Basketball', 'Fiction', 'Fantasy', 'Piano', 'Painting',
      'Sculpting', 'Shooting game', 'Board game', 'Escape game'];

    this.items = [];
    for (let i = 0; i < this.titles.length; i++) {
      this.items.push({
        title: this.titles[i],
        icon: this.icons[i],
        activities: this.activitiesrand
      });
    }
  }

  itemTapped(item) {

    this.navCtrl.push(Attr_activitiesPage, {
      item: item
    });
  }
}
