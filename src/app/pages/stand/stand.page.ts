
//   datos:any = {
//     description: { title: 'Información', content: 'Contenido de información...' },
//     Features: { title: 'Descripción', content: 'Contenido de descripción...' },
//     sizeChart: { title: 'Características', content: 'Contenido de características...' },
//   };


import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBasicComponent } from '@myComponents/modals/modal-basic/modal-basic.component';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stand',
  templateUrl: './stand.page.html',
  styleUrls: ['./stand.page.scss'],
})
export class StandPage implements OnInit {
  data: any;
  constructor(private modalCtl: ModalController, private route: ActivatedRoute,private router:Router) { }

  async presentModal(section: string) {
    const modalBasic = this.modalCtl.create({
      component: ModalBasicComponent,
      cssClass: 'modal-basic',
      componentProps: {
        dataSection: { section, data: this.data.description }
      },
    })
    return (await modalBasic).present()
  }

  ngOnInit() {
    //*params por URL
    // this.route.paramMap.subscribe(params => {
    //   const datos = params.get('id')
    //   console.log(datos)
    // }
    // )
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras.state?.['data'];
    // console.log(this.data);
  }
}

