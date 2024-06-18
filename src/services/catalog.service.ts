import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}
  getItems(params?:any, options?: any){
    return this.http.get(environment.apiCatalog,  { params: new HttpParams({ fromObject: params })});
  }
  getProduct(id: number) {
    return this.http.get(`${environment.apiCatalog}/${id}`);
  }
  getCatalog() {
    return this.http.get(environment.apiCatalog, {params: new HttpParams({}),});
  }
  getByCategory(){
  }
}
