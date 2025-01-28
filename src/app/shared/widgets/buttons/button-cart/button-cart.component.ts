import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ShoppingCartService } from '@myServices/shopping-cart.service';

@Component({
  selector: 'app-button-cart',
  templateUrl: './button-cart.component.html',
  styleUrls: ['./button-cart.component.scss'],
  standalone:false
})
export class ButtonCartComponent  implements OnInit {
// count$:number=4;
  count$=this.cartSvc.itemsCount$;
  constructor(private menuCtrl: MenuController,private cartSvc: ShoppingCartService) { }

  ngOnInit() {}
  openCart() {
    this.menuCtrl.open('end');
  }

}
