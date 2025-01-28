import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBasicComponent } from './cards/card-basic/card-basic.component';
import { ButtonCartComponent } from './buttons/button-cart/button-cart.component';
import { ModalGenericComponent } from './modal-generic/modal-generic.component';
import { ItemBasicComponent } from './item/item-basic/item-basic.component';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  declarations: [
    ButtonCartComponent,
     CardBasicComponent,
     ItemBasicComponent,
     ModalGenericComponent,
     RatingComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonCartComponent,
    CardBasicComponent,
    ItemBasicComponent,
    ModalGenericComponent,
    RatingComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetsModule { }
