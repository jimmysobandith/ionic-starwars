import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPeoplePage } from './detail-people';

@NgModule({
  declarations: [
    DetailPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPeoplePage),
  ],
})
export class DetailPeoplePageModule {}
