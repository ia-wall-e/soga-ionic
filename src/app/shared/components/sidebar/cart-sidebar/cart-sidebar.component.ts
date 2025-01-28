import { Component, input, OnInit } from '@angular/core';
import { ShoppingCartService } from '@myServices/shopping-cart.service';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss'],
  standalone:false
})
export class CartSidebarComponent  implements OnInit {

  content = input<any>()
  items$ = this.cartSvc.items$;
  total$=this.cartSvc.total$;
  constructor(private cartSvc:ShoppingCartService) { }
  ngOnInit() {
    // this.items$.subscribe(x=>console.log(x))
   }


}
