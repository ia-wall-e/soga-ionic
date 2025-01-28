import { Component, OnInit, input, effect } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ItemCard } from '@myModels/item-card';
import { ShoppingCartService } from '@myServices/shopping-cart.service';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.scss'],
  standalone: false
})
export class CardBasicComponent implements OnInit {
  available: boolean = false;
  cssCard = input<any>(null);
  item = input<any>(null);
  constructor(private cartSvc: ShoppingCartService, private router: Router, private modalCtrl: ModalController) {
    effect(() => {
      if(this.item())this.available=true;
    })
  }

  ngOnInit() {
  }

//#region - Modal - Stand
showcase(productId: number) {
  this.router.navigate(['/showcase-product', productId]);
}
addCart(product: any) {
  // this.cartSvc.addItem(product);
}
//#endregion
}
