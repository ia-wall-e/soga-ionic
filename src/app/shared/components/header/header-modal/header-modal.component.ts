import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
  standalone:false
})
export class HeaderModalComponent  implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  close() {
    this.modalCtrl.dismiss();
  }

}
