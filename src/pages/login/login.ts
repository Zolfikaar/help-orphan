import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginModel } from '../../model/login-model';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

import { ActionsPage } from '../actions/actions';
import { ResetPasswordPage } from '../reset-password/reset-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userInfo:LoginModel={
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginServiceProvider: LoginServiceProvider) {
  }

  login(userInfo: LoginModel) {
    this.loginServiceProvider.getUserLoginInfo(userInfo).stateChanges
      
    this.navCtrl.push(ActionsPage)
      console.log('login')
    
  }

  forgetPassword(){
    this.navCtrl.push(ResetPasswordPage)
    console.log('login')
  }
}
