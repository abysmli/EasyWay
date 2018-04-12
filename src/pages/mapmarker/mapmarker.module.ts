import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MapmarkerPage } from './mapmarker';

@NgModule({
  declarations: [
    MapmarkerPage,
  ],
  imports: [
    IonicPageModule.forChild(MapmarkerPage),
    TranslateModule.forChild()
  ],
  exports: [
    MapmarkerPage
  ]
})
export class MapmarkerPageModule {}
