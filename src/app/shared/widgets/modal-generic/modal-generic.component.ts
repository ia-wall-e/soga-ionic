import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.scss'],
  standalone:false
})
export class ModalGenericComponent  {

  @Input() title!: string;
  @Input() template!: TemplateRef<any>;
  constructor(private modalCtrl: ModalController) { }
  close() {
    this.modalCtrl.dismiss();
  }


}
