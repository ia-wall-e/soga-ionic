import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '@myServices/shopping-cart.service';
import { CartItem } from '@myInterfaces/cart-item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  //¡por get
  // get shoppingCart():CartItem[]{ return this.cartService.items;}
  // get totalPrice(): number {
  //   return this.cartService.totalPrice;
  // }
  //¡ por observables
  shoppingCart$ = this.cartService.items$;
  itemsInCart$=this.cartService.itemsCount$;
  totalPrice$ = this.cartService.totalPrice$;
  //¡otras variables
  showItems = true;
  constructor(private cartService: ShoppingCartService) {}
  ngOnInit() {}
  removeItemCart(item: CartItem) {
    this.cartService.removeItem(item);
  }
  toggleItemsHidden() {
    this.showItems = !this.showItems;
  }
}
