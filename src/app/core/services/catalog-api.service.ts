import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {
  constructor(private http: HttpClient) {
  }
  getEntry(): Observable<any> {
    const urlProducts = "https://dummyjson.com/products";
    // const urlProducts = "/assets/api/products-test.json";
    const urlGolden = "/assets/api/templateDataA.json";
    const urlPromotional = '/assets/api/promotional-assets.json';
    const params = new HttpParams().set('limit', 0);
    const products$ = this.http.get<any>(urlProducts, { params });
    const banner$ = this.http.get<any>(urlPromotional);
    const golden$ = this.http.get<any>(urlGolden);
    return forkJoin([products$, banner$, golden$]).pipe(map(([productsRes, bannerRes, goldenRes]: any[]) => {
      const products= {...productsRes};
      return {
        banner: bannerRes,
        products: productsRes.products,
        golden: goldenRes.gold
      }
    }))
  }
  getProductId(id: any): Observable<any> {
    const url = `https://dummyjson.com/products/${id}`;
    return this.http.get<any>(url)
  }
  getProductCtg(ctg:string):Observable<any>{
    const url = `https://dummyjson.com/products/category/${ctg}`;
    const params = new HttpParams().set('limit', 4);
    const data= this.http.get<any>(url,{params})
    // console.log(data);
    return data;
  }
}
