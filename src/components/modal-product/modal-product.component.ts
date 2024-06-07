import {
  Component,
  ViewChild,
  inject,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Product } from '@myInterfaces/product-interface';
import { EventService } from '@myServices/event.service';
import { CatalogService } from '@myServices/catalog.service';
@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss'],
})
export class ModalProductComponent implements OnInit, OnDestroy {
  eventSvc = inject(EventService);
  catalogSvc = inject(CatalogService);
  modalController = inject(ModalController);
  //#Propiedades
  @Input() productID: number;
  isLoading: boolean = true;
  product!: Product;
  subscription: Subscription;
  //#Metodos
  ngOnInit() {
    this.showProduct();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Me he desuscrito del observable.');
  }
  async showProduct() {
    await this.loadItem(this.productID);
  }
  private loadItem(productID: number) {
    return new Promise((resolve, reject) => {
      if (productID) {
        this.subscription = this.catalogSvc
          .getProduct(Number(productID))
          .subscribe({
            next: (v: Product) => {
              console.log('subscrito');
              this.product = v;
              return resolve;
            },
            error: (err) => {
              console.log(err);
              return reject(err);
            },
          });
      }
    });
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
