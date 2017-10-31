import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Attr_activitiesPage} from "../attr_activities/attr_activities";

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {
  selectedItem: any;
  icons: string[];
  titles: string[];
  pages: any[];
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController) {

    this.icons = ['football', 'book', 'film', 'brush', 'musical-notes', 'game-controller-b',
      'bonfire', 'moon', 'restaurant', 'people'];

    this.titles = ['Sport', 'Reading', 'Movies', 'Creativity', 'Music', 'Video games',
      'Role Play', 'Sleep', 'Cooking', 'Group'];

//    this.pages = [SportPage, ReadingPage, MoviesPage, CreativityPage, MusicPage, VideoGamesPage, RolePlayPage, SleepPage, CookingPage, GroupPage];

    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        title: this.titles[i],
        icon: this.icons[i]
      });
    }
  }

  itemTapped(item) {
    this.navCtrl.push(Attr_activitiesPage, {
      item: item
    });
  }
}
