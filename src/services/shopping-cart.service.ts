import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '@myInterfaces/cart-item';
import { Product } from '@myInterfaces/product-interface';
import { AuthService } from './auth.service';
import { UtilsService } from './utils.service';
@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  authSvc = inject(AuthService);
  utilSvc = inject(UtilsService);
  //#PROPIEDADES
  private items = new BehaviorSubject<CartItem[]>([]);
  items$ = this.items.asObservable();
  private subscription: Subscription;

  //#Cantidad de elementos en el cart
  itemsCount$: Observable<number> = this.items$.pipe(
    map((items) => items.length)
  );
  //#Precio total
  totalPrice$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, { price }) => (acc += price), 0))
  );
  //#Agrega-cart
  addToCart(item: CartItem) {

  }
  private handlerAddToCart(key: string, data: CartItem) {
    // if (key) {
    //   this.utilSvc.saveStorage(key, data);
    //   this.utilSvc.presentToast({
    //     message: 'Producto agregado a tu bolsa de compras',
    //     duration: 3000,
    //     color: 'primary',
    //     position: 'bottom',
    //     icon: 'alert-circle-outline',
    //   });
    // }
    this.items.next([...this.items.value, data]);
  }
  private handlerError(err) {
    console.log(err);
    this.utilSvc.presentToast({
      message: 'No se guardo el elemento',
      duration: 3000,
      color: 'primary',
      position: 'bottom',
      icon: 'alert-circle-outline',
    });
  }
  //#remover-cart
  removeItem(item: CartItem) {
    this.items.next(this.items.value.filter((elem) => item !== elem));
  }
  mapProductToCartItem(product: Product): CartItem {
    //¡ ↑ Conversor de interfaces producto -> cartItem
    return {
      id: product.id,
      name: product.title,
      img: product.image,
      quantity: 1,
      price: product.price,
    };
  }
}
