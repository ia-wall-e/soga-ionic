import { Component, OnInit, signal } from '@angular/core';
import { modulo } from '@myInterfaces/modulo';
import { Product } from '@myInterfaces/product';
import { CatalogService } from '@myServices/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', './head-main.scss'],
})
export class HomePage implements OnInit {
  //#region - Propiedades
  sellerID: string = "seller";
  seller = signal<modulo>({ state: false, headline: { title: '', subtitle: '' } });
  storeID:string="store";
  store= signal<modulo>({ state: false, headline: { title: '', subtitle: '' } });
  //#endregion
  constructor(private catalogSvc: CatalogService) { }
  //#region - Lifecycle
  ngOnInit() {
    this.apiResource();
    this.testCategory();
  }
  //#endregion
  //#region - Metodos component
  testCategory() {
    const params = {
      limit: 200
    }
    const category = "sports-accessories";
    this.catalogSvc.apiCategory(category).subscribe({
      next: (data: any) => {
        console.log(data)
        if (data.ok) {
          let items;
          if (data.body.products) { items = data.body.products } else { items = data.body }
          this.store.set({
            state: true,
            headline: {
              title: 'Independent Art', subtitle: 'Todo en productos deportivos'
            },
            products: items
          })

        }
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => { }
    });
    console.log(this.store())
  }
  apiResource() {
    const params = {
      limit: 200
    }
    this.builderReq(params)
  }
  private builderReq(params?: any, headline?: any, mod?: string) {
    this.catalogSvc.apiProducts(params).subscribe({
      next: (data: any) => {
        console.log(data)
        if (data.ok) {
          let items;
          if (data.body.products) { items = data.body.products } else { items = data.body }
          this.seller.set({
            state: true,
            headline: {
              title: 'Lo mas vendido', subtitle: 'Productos que han sido tendencia esta semana'
            },
            products: items
          })

        }
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => { }
    });
    // console.log(this.seller())
  }
  //#endregion
  //#region - DEV
  //#endregion
}
