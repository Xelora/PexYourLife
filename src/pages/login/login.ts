import {Component} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {SigninPage} from '../signin/signin';
import {HomePage} from '../home/home';
import {Facebook} from '@ionic-native/facebook';
import {GooglePlus} from '@ionic-native/google-plus';

import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController, menu: MenuController,
              private facebook: Facebook, public googlePlus: GooglePlus) {
    menu.enable(false);
  }

  loginWithGooglePlus() {
    this.googlePlus.login({
      'webClientId': '216222563379-39dn3rq18o3m6jvinqm2fad4sklk5k84.apps.googleusercontent.com'
    }).then((res) => {
      const firecards = firebase.auth.GoogleAuthProvider.credential(res.idToken);
      firebase.auth().signInWithCredential(firecards).then((res) => {
        alert('Connexion done ' + res);
        this.navCtrl.setRoot(HomePage);
      }).catch((err) => {
        alert('Firebase auth failed' + err);
      })
    }).catch((err) => {
      alert('Error' + err);
    })
  }

  loginWithFB() {
    this.facebook.login(['email']).then(res => {
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(fc).then(login_success => {
        alert('Connexion done ' + login_success);
        this.navCtrl.setRoot(HomePage);
      }).catch(login_fail => {
        alert('Firebase auth failed' + login_fail)
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
