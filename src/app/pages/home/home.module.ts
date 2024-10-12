import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IconModule } from 'src/app/core/icon/icon.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { ComponentsModule } from '@myComponents/components.module';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { apiProgressInterceptor } from 'src/app/interceptors/api-progress.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconModule,
    HomePageRoutingModule,
    CommonModule,
    ComponentsModule,
  ],
  declarations: [HomePage],

})
export class HomePageModule {}
