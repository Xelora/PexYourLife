import {Component} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {SigninPage} from '../signin/signin';
import {HomePage} from '../home/home';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  userData = null;

  constructor(public navCtrl: NavController, menu: MenuController, private  facebook: Facebook) {
    menu.enable(false);
  }

  loginWithFB() {
    this.facebook.login(['email']).then(res => {
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(fc).then(fs => {
        alert('connexion done')
      }).catch(ferr => {
        alert('firebase errc')
      })
    }).catch(err => {
      alert(JSON.stringify(err))
    })
  }

  signinTapped() {
    this.navCtrl.push(SigninPage);
  }

  loginTapped() {
    this.navCtrl.setRoot(HomePage);
  }
}
