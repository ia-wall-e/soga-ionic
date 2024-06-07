import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CartItem } from 'src/interfaces/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() itemCart: CartItem = {
    id: 0,
    name: 'No disponible',
    img: 'No disponible',
    requiredOptions: {},
    addOns: {},
    quantity: 0,
    price: 0,
  };
  @Output() itemCartOut = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  outOfCart() {
   this.itemCartOut.emit();
  }
}
