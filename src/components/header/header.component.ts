import { Component, inject } from '@angular/core';
import { ShoppingCartService } from '@myServices/shopping-cart.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private authSvc = inject(AuthService);
  private cartSvc = inject(ShoppingCartService);
  //#propiedades
  $logState = this.authSvc.authState$;
  $itemsCart = this.cartSvc.itemsCount$;
}
