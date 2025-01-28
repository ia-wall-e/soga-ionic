import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '@myServices/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
  standalone:false
})
export class ShoppingCartPage implements OnInit {
  products$ = this.cartSvc.items$
  total$ = this.cartSvc.total$;

  constructor(private cartSvc: ShoppingCartService) { }

  ngOnInit() {}
  removeProduct(id: any): void {
    this.cartSvc.removeItem(id);
  }
}
