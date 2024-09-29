import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBasicComponent } from '@myComponents/modals/modal-basic/modal-basic.component';
// import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-stand',
  templateUrl: './stand.page.html',
  styleUrls: ['./stand.page.scss'],
})
export class StandPage implements OnInit {
  datos:any = {
    description: { title: 'Información', content: 'Contenido de información...' },
    Features: { title: 'Descripción', content: 'Contenido de descripción...' },
    sizeChart: { title: 'Características', content: 'Contenido de características...' },
  };
  constructor(private modalCtl: ModalController) { }

  async presentModal(section:string) {
    const modalBasic = this.modalCtl.create({
      component: ModalBasicComponent,
      cssClass: 'modal-basic',
      componentProps:{
        dataSection:{section, data:this.datos[section]}
      },
    })
    return (await modalBasic).present()
  }

  ngOnInit() {
  }
}
