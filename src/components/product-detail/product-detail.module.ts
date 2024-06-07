import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import {SelectStandardComponent} from './select-standard/select-standard.component';
import {SelectSizeComponent} from './select-size/select-size.component';
import {SelectColorComponent} from './select-color/select-color.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    SelectStandardComponent,
    SelectSizeComponent,
    SelectColorComponent
  ],
  imports: [CommonModule,IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    ProductDetailComponent,
    SelectStandardComponent,
    SelectSizeComponent,
    SelectColorComponent
  ]

})
export class ProductDetailModule { }
