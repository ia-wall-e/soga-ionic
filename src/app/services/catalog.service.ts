import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http:HttpClient) { }
  apiTest(params?:any, options?: any):Observable<any>{
   return this.http.get(environment.apiStore,{ params: new HttpParams({ fromObject: params })})
  }
}
