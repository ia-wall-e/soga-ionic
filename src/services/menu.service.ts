import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuTemp } from '../interfaces/menu-main-interface';
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}
  getMenu() {
    return this.http.get<MenuTemp>('../assets/config/manuMain.json');
  }
}
