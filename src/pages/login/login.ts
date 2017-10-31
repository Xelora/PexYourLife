import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {SigninPage} from "../signin/signin";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, menu: MenuController) {
    menu.enable(false);
  }

  signinTapped() {
    this.navCtrl.push(SigninPage);
  }

  loginTapped() {
    this.navCtrl.setRoot(HomePage);
  }

}
