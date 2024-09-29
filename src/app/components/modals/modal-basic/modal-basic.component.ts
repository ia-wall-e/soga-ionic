import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.scss'],
})
export class ModalBasicComponent implements OnInit {
  @Input() dataSection: any;
  title: string = "Welcome"
  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
    console.log(this.dataSection)
   }
  cancel() {
    this.modalCtr.dismiss();
  }

  confirm() {
    this.modalCtr.dismiss();
  }
}
