import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard } from 'ionic-angular';
//import { angularFireAuth } from 'angularfire2/auth';


import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {

  }

  signin() {
    this.navCtrl.push(LoginPage)
    console.log('go to log in')


  }

  
}

  // /* keybord stuff */

      // if (this.keyboardCheck){
    //   this.keyboard.didShow
    //   console.log('keybord is open')
    // }

    // this.keyboard.onClose(this.closeCallback);
    // this.keyboard.didHide

    // this.keyboard.eventsAvailable
    // this.keyboard.hasFocusedTextInput()

  // keyboardCheck() {
  //   this.keyboard.isOpen();
  //   //console.log('The keyboard is open:', this.keyboard.isOpen());
  // }

  // closeCallback() {
  //   this.keyboard.close();
  //   console.log('Closing time');
  // }
