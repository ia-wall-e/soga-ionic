import { Component, Input, Output,  EventEmitter, inject } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
import{ Router} from '@angular/router';
import { Product } from '@myInterfaces/product-interface';
import{ModalProductComponent}from'@myComponents/modal-product/modal-product.component';
import { ShoppingCartService } from '@myServices/shopping-cart.service';
import { EventService } from '@myServices/event.service';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss'],
})
export class CardMiniComponent {
 /* @Output() standItem = new EventEmitter<string>();*/
  @Input() itemCard!: Product;
  eventSvc= inject(EventService);
  modalController=inject(ModalController);
  constructor(
    private cartService: ShoppingCartService,
    private navCtrl: NavController,
    private router: Router,
  ) {}
  //#Agregar al cart directamente
  /*
  addToCart(): void {
    const itemCart = this.cartService.mapProductToCartItem(this.itemCard);
    console.log(itemCart);
    this.cartService.addItem(itemCart);
  }
  */
  //#Enviar data a una page
  goToDetail(id: number): void {
    //©NavController
    // const params = {
    //   id,
    //   type:"food"
    // };
    // this.navCtrl.navigateForward('/detalles', { queryParams: params });
    //©Router
    this.router.navigate(['/detalles', id]);
  }
  //#Enviar data a otro componente -por @output
  /*
  sendItem(){
    console.log("enviado")
    this.standItem.emit("hola");
  }
  */
 //#enviar a otro componeten por service
 onEventSend(eventData: any) {
  this.eventSvc.emitEvent(eventData);
}
//#con ModalController
async openModal(eventData){
const modal= await this.modalController.create({
  component:ModalProductComponent,
  componentProps:{productID:eventData}
});
await modal.present();

}
}
