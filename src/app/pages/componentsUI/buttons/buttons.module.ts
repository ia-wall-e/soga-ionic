import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonsPageRoutingModule } from './buttons-routing.module';
import { ButtonsPage } from './buttons.page';
/*icons*/
import { IconModule } from 'src/app/core/icon/icon.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsPageRoutingModule,
    IconModule
  ],
  declarations: [ButtonsPage]
})
export class ButtonsPageModule {}
