import {Component} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {SigninPage} from '../signin/signin';
import {HomePage} from '../home/home';
import {Facebook} from '@ionic-native/facebook';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  userData = null;

  constructor(public navCtrl: NavController, menu: MenuController,
              private facebook: Facebook, public googleplus: GooglePlus) {
    menu.enable(false);
  }

  loginWithGooglePlus() {
    this.googleplus.login({
      'webClientId': '216222563379-39dn3rq18o3m6jvinqm2fad4sklk5k84.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.IdToken())).then()
      .then(login_success => {
        alert('LOGIN SUCCESS')
      }).catch(login_fail => {
        alert('LOGIN FAILED')
      })
    })
  }

  loginWithFB() {
    this.facebook.login(['email']).then(res => {
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(fc).then(login_success => {
        alert('connexion done')
      }).catch(login_fail => {
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
