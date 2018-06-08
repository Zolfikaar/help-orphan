import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginModel } from '../../model/login-model' ;

import { AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class LoginServiceProvider {

  private userInfo = this.db.list<LoginModel>('userAuthInfo')

  constructor( public db: AngularFireDatabase) {
    console.log('Hello LoginServiceProvider Provider');
  }

  getUserLoginInfo(formLoginInfo: LoginModel){
    return this.userInfo;
  }

  createUser(formLoginInfo: LoginModel){
    return this.userInfo.push(formLoginInfo)
  }

  removeUser(formLoginInfo: LoginModel) {
    return this.userInfo.remove(formLoginInfo.key)
  }
}
