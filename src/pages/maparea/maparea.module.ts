import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MapareaPage } from './maparea';

@NgModule({
  declarations: [
    MapareaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapareaPage),
    TranslateModule.forChild()
  ],
  exports: [
    MapareaPage
  ]
})
export class MapareaPageModule {}
