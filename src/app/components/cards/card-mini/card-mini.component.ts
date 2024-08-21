import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '@myInterfaces/product';
@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss'],
})
export class CardMiniComponent  implements OnInit {

  @Input() item?: Product;
  @Output() itemCartOut = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  outOfCart() {
   this.itemCartOut.emit();
  }

}
