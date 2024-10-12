import { HttpClient, HttpContext, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CHECK_JWT } from '../interceptors/PROTECTED_API';
import { Serializer } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private http: HttpClient) { }
  /*  */
  apiProducts(params?: any, options?: any, context?: { applyInterceptor: boolean }): Observable<any> {
    const req = new HttpRequest('GET', environment.apiStore, {
      params: new HttpParams({ fromObject: params }),
      context: new HttpContext().set(CHECK_JWT, true)
    });
    return this.http.request(req);
  }
  /* */
  apiCategory(category:string="category-list",params?:any, options?:any) { 
    const url = `${environment.apiStore}/category/${category}`;
    const req = new HttpRequest('GET', url,{
      params: new HttpParams ({fromObject:params}),
      context: new HttpContext().set(CHECK_JWT,true),
    });
    return this.http.request(req)
  }
}
