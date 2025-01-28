import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { LocalDBService } from './local-db.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private items = new BehaviorSubject<any[]>([]);
  items$ = this.items.asObservable();
  itemsCount$ = this.items$.pipe(map(data => { return data.length }))
  total$ = this.items$.pipe(map((items) => items.reduce((acc, { price }) => (acc += price), 0)))
  constructor(private localDB: LocalDBService) {
    // this.localDB.infoDB();
    this.getShoppingCart()
    this.localDB.getChangeStream().subscribe(x => this.getShoppingCart());
  }
  private getShoppingCart() {
    this.localDB.allDocuments()
      .then((res) => {
        const items = res.map((item: any) => item.product)
        this.items.next(items);
      })
  }
  addItem(item: any) {
    const itemCart = this.asItemCart(item)
    this.localDB.createDocument(itemCart)
  }
  removeItem(id: any) {
    const _id = id.toString()
    this.localDB.deleteDocument(_id);
  }
  private asItemCart(item: any): any {
    const id = item.id.toString()
    const itemCart = {
      _id: id,
      product: item
    }
    return itemCart;
  }
}
