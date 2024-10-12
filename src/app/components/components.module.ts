import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
//directivas
import { TestDirective } from '../directives/test.directive';
import { ImageHandlerDirective } from '../directives/image-handler.directive'; 
//swuper
import { register } from 'swiper/element/bundle';
//icon
import { IconModule } from '../core/icon/icon.module';
/*Components*/
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { CardLightComponent } from './cards/card-light/card-light.component';
import { CardBasicComponent } from './cards/card-basic/card-basic.component';
import { MdCardSlideComponent } from './modulos/md-card-slide/md-card-slide.component';
import { MdCardCapsuleComponent } from './modulos/md-card-capsule/md-card-capsule.component';
import { ModalBasicComponent } from './modals/modal-basic/modal-basic.component';
import { SearchComponent } from './search/search.component';
//stand
import { DescriptionComponent } from './stand/description/description.component';
import { FeaturesComponent } from './stand/features/features.component';
import { SizeChartComponent } from './stand/size-chart/size-chart.component';
//swiper
register();
@NgModule({
  declarations: [
    NavDrawerComponent,
    HeaderComponent,
    NotificationComponent,
    MdCardSlideComponent,
    MdCardCapsuleComponent,
    CardLightComponent,
    CardBasicComponent,
    SearchComponent,
    ModalBasicComponent,
    DescriptionComponent,
    FeaturesComponent,
    SizeChartComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    IconModule,
    TestDirective,
    ImageHandlerDirective
  ],
  exports: [
    NavDrawerComponent,
    HeaderComponent,
    NotificationComponent,
    MdCardSlideComponent,
    MdCardCapsuleComponent,
    CardLightComponent,
    CardBasicComponent,
    SearchComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }

//! Notas: el componente FormComponent tiene su modulo
