import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CatalogService } from '@myServices/catalog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss'],
  standalone:false
})
export class AddCartComponent  implements OnInit, OnDestroy {
  mod=signal<any>(null);
  @Input() product!: any;
  sub$?: Subscription;
  constructor(private catalog: CatalogService, private modalCtrl: ModalController) { }
  //#region - Hooks
  ngOnInit(): void {
    // console.log(this.product.category)
    this.suggested();
  }
  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }
  //#endregion
  suggested() {
    this.sub$ = this.catalog.getProductCtg(this.product.category).subscribe({
      next: (data) => {
        const modulo = { headline: { title: "Te podria gustar" }, products: data.products};
        this.mod?.set(modulo);
        // console.log(this.mod())
      },
      error: (error) => { console.error(error) }
    })
  }
  // close() {
  //   this.modalCtrl.dismiss();
  // }

}
