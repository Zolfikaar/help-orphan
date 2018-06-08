import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component'; 
import { HomePage } from '../pages/home/home';
import { ActionsPage } from '../pages/actions/actions';
import { DetailsPage } from '../pages/details/details';
import { IdentifierInfoPage } from '../pages/identifier-info/identifier-info';
import { LoginPage } from '../pages/login/login';
import { OrphanInfoPage } from '../pages/orphan-info/orphan-info';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SearchResultPage } from '../pages/search-result/search-result';
import { LoginServiceProvider } from '../providers/login-service/login-service';

export const firebaseConfig = {
  apiKey: "AIzaSyBBsX193E2VSpSgQ2u6nMDBWmZdohJiwtE",
  authDomain: "help-orphans.firebaseapp.com",
  databaseURL: "https://help-orphans.firebaseio.com",
  projectId: "help-orphans",
  storageBucket: "",
  messagingSenderId: "391261222278"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionsPage,
    DetailsPage,
    IdentifierInfoPage,
    LoginPage,
    OrphanInfoPage,
    RegisterPage,
    ResetPasswordPage,
    SearchResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionsPage,
    DetailsPage,
    IdentifierInfoPage,
    LoginPage,
    OrphanInfoPage,
    RegisterPage,
    ResetPasswordPage,
    SearchResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServiceProvider
  ]
})
export class AppModule { }
