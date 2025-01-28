import { Component, OnInit,signal } from '@angular/core';
import { CatalogService } from '@myServices/catalog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store-a',
  templateUrl: './store-a.page.html',
  styleUrls: ['./store-a.page.scss'],
  standalone:false
})
export class StoreAPage implements OnInit {
//#region - Propiedades
signals = {
  banner_A: signal<any>(null),
  navbar: signal<any>(null),
  dualStatic: signal<any>(null),
  golden: signal<any>(null),
  slides: signal<any>(null),
  statics: signal<any>({ headline: null, mods: null }),
  otherOffers: signal<any>(null)
};
private subscriptions = new Subscription();
constructor(private catalogSvc: CatalogService) { }
//#endregion
//#region - hooks
ngOnInit(): void {
  this.loadData();
  this.fetchData();
}
ngOnDestroy(): void {
  this.subscriptions.unsubscribe();
  console.log('Suscripciones canceladas');
}
//#endregion
//#region - fetch - handlers 
private fetchData(): void {
  this.subscriptions.add(this.handlerData());

}
private fetchDataSoport() {
  this.subscriptions.add(this.handlerDataSoport())
}
private handlerDataSoport() {
  // return this.catalogSvc.productsSoport().subscribe({
  //   next: (data: any) => console.log('Fallback products:', data.body),
  //   error: this.handleError('Error handlering support products')
  // });
}
private handlerData() {
  return this.catalogSvc.getDataEntry().subscribe({
    next: (data: any) => {
      const container= data.containers;
      this.handlerBanner(data.banner);
      this.handlerStatics(container.statics);
      this.handlerSlides(container.slides);
      this.handlerGolden(container.golden);
    },
    error: () => {
      this.fetchDataSoport()
      this.handleError('Error handlering support products');
    }
  });
}
private handlerBanner(data: any): any {
  // console.log(data)
  return this.signals.banner_A.set(data.banner);
}
private handlerStatics(data: any): any {
  // return this.signals.statics.set(data);
  const mods = new Array(1).fill(null);
  if (data) {
    return this.signals.statics.set(data);
  } else {
    return this.signals.statics.set({ mods: mods })
  }
}
private handlerSlides(data: any): any {
  // console.log(data)
  const modsSK = new Array(2).fill(null);
  if (data) {
    return this.signals.slides.set(data);
  } else {
    return this.signals.slides.set({ mods: modsSK })
  }
}
private handlerGolden(data: any): any {
  const mods = new Array(1).fill(null);
  if (data) {
    return this.signals.golden.set(data);
  } else {
    return this.signals.golden.set({ mods: mods })
  }
}
private handleError(message: string) {
  return (error: any) => console.error(message, error);
}
//#endregion
//#region - Metodos
private loadData(): void {
  this.signals.navbar.set({
    state: true,
    items: [
      { icon: "style", title: "Categorias", link: "/home" },
      { icon: "loyalty", title: "Cupones", link: "/mall" },
      { icon: "redeem", title: "Ofertas", link: "/home" },
      { icon: "featured_seasonal_and_gifts", title: "Tarjetas para juego de la fortuna", link: "/home" },
      { icon: "local_fire_department", title: "Tendencias", link: "/home" }
    ]
  });
}
//#endregion
}
