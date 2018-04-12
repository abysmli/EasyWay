import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MapnormalPage } from './mapnormal';

@NgModule({
  declarations: [
    MapnormalPage,
  ],
  imports: [
    IonicPageModule.forChild(MapnormalPage),
    TranslateModule.forChild()
  ],
  exports: [
    MapnormalPage
  ]
})
export class MapnormalPageModule {}
