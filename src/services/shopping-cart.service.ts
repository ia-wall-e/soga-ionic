import { Injectable, inject } from '@angular/core';
import{ModalController}from'@ionic/angular';
import { BehaviorSubject, Observable,firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UtilsService } from './utils.service';
import { StorageService } from './storage.service';
import { CartItem } from '@myInterfaces/cart-item';
import { Product } from '@myInterfaces/product-interface';
@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  private authSvc = inject(AuthService);
  private storageSvc = inject(StorageService);
  modalController= inject(ModalController);
  utilSvc = inject(UtilsService);
  //#PROPIEDADES
  private items = new BehaviorSubject<CartItem[]>([]);
  items$ = this.items.asObservable();
  private cart: CartItem[];
  //#Cantidad de elementos en el cart
  itemsCount$: Observable<number> = this.items$.pipe(
    map((items) => items.length)
  );
  //#Precio total
  totalPrice$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, { price }) => (acc += price), 0))
  );
  //#Agrega-cart
 async addToCart(item: CartItem) {
    const key = await firstValueFrom(this.authSvc.getUID());
    this.cart = [...this.items.value, item];
    this.storageSvc
      .set(`@soga${key}`, this.cart)
      .then(() => {
        this.items.next(this.cart);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handlerSuccess(x:string){
   
  }
  //#remover-cart
 async removeItem(item: CartItem) {
    try {
      const key = await firstValueFrom(this.authSvc.getUID());
      this.cart = this.items.value.filter((elem) => item !== elem);
      this.storageSvc
        .set(`@soga${key}`, this.cart)
        .then(() => {
          this.items.next(this.cart);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      throw Error('No se pudo eliminar el elmento del carro de compras');
    }
  }
  //#Iniciar carrito de compras
  async initCart() {
    try {
      this.closeCart()
      const key = await this.storageSvc.keyExist();
      if (key.includes(`@soga${key}`)) {
        this.cart = await this.storageSvc.get(`@soga${key}`);
        this.items.next(this.cart);
        console.log('Cart Iniciado');
      } else {
        console.log('Cart no existe');
      }
    } catch (err) {
      throw Error('no se obtuvieron los datos del cart');
    }
  }
  closeCart(){
    this.items.next([])
  }
  //#commons/utils
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
