import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentifierInfoPage } from './identifier-info';

@NgModule({
  declarations: [
    IdentifierInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(IdentifierInfoPage),
  ],
})
export class IdentifierInfoPageModule {}
