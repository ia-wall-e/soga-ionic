import { Injectable } from '@angular/core';
import { CatalogApiService } from './catalog-api.service';
import { map, Observable } from 'rxjs';
import { EntryModel } from '@myModels/EntryModel';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private apiCatalog: CatalogApiService) { }
  //#region - Home mall
  getDataEntry(): Observable<any> {
    return this.apiCatalog.getEntry().pipe(
      map((data: any) => {
        const containers = this.createEntry(data.products, data.golden);
        const banner = data.banner;
        const entry = { banner, containers }
        return entry
      })
    )
  }
  private createEntry(products: any, productsGolden: any): any {
    const getContainer = new EntryModel(products, productsGolden);
    const offers: any = getContainer.getOffers();
    const statics: any = getContainer.getStatics();
    const slides: any = getContainer.getSlides();
    const golden: any = getContainer.getGolden();
    const containers = { offers, statics, slides, golden }
    return containers;
  }
  //#endregion
  getProductId(id: any): Observable<any> {
    return this.apiCatalog.getProductId(id)
  }
  getProductCtg(ctg:string): Observable<any> {
    return this.apiCatalog.getProductCtg(ctg);
  }
}
