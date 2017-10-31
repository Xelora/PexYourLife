import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActivitiesPage} from '../pages/activities/activities'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {SigninPage} from "../pages/signin/signin";
import {Attr_activitiesPage} from "../pages/attr_activities/attr_activities";

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
