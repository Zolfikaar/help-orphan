import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchResultPage } from '../search-result/search-result';
import { OrphanInfoPage } from '../orphan-info/orphan-info';

@IonicPage()
@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html',
})
export class ActionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionsPage');
  }

  searchForOrphan() {
    this.navCtrl.push(SearchResultPage)
    console.log('login')
  }

  addOrphan() {
    this.navCtrl.push(OrphanInfoPage)
    console.log('login')
  }
}
