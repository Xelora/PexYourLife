import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ActivitiesPage} from '../pages/activities/activities';
import {Facebook} from '@ionic-native/facebook';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {SigninPage} from '../pages/signin/signin';
import {Attr_activitiesPage} from '../pages/attr_activities/attr_activities';

export const firebaseConfig = {
  apiKey: 'AIzaSyAuxobMGnH4UNMDr-XbiwEyZsTeTPhf-84',
  authDomain: 'pexyourlifeauth.firebaseapp.com',
  databaseURL: 'https://pexyourlifeauth.firebaseio.com',
  projectId: 'pexyourlifeauth',
  storageBucket: 'pexyourlifeauth.appspot.com',
  messagingSenderId: '216222563379'
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActivitiesPage,
    LoginPage,
    SigninPage,
    Attr_activitiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActivitiesPage,
    LoginPage,
    SigninPage,
    Attr_activitiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
