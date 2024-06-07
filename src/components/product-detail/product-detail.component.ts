import { Component, OnInit,Input,inject} from '@angular/core';
import {Product} from '@myInterfaces/product-interface';
import{ShoppingCartService}from'@myServices/shopping-cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
cartSvc=inject(ShoppingCartService);
 @Input() product!:Product;
  constructor() {}

  ngOnInit() {}
  addCart(){
    const itemCart = this.cartSvc.mapProductToCartItem(this.product);
    this.cartSvc.addToCart(itemCart);
  }
}
