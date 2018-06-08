import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrphanInfoPage } from './orphan-info';

@NgModule({
  declarations: [
    OrphanInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(OrphanInfoPage),
  ],
})
export class OrphanInfoPageModule {}
