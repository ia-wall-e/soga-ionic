import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShowcasePageRoutingModule } from './showcase-routing.module';
import { ShowcasePage } from './showcase.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';
/* */
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowcasePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ShowcasePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowcasePageModule {}
