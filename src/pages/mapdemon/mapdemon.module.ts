import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MapdemonPage } from './mapdemon';

@NgModule({
  declarations: [
    MapdemonPage,
  ],
  imports: [
    IonicPageModule.forChild(MapdemonPage),
    TranslateModule.forChild()
  ],
  exports: [
    MapdemonPage
  ]
})
export class MapdemonPageModule {}
