import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '@myInterfaces/user-credentials';
import { AuthService } from '@myServices/auth.service';
import{map,Observable}from'rxjs';
@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
})
export class NavDrawerComponent implements OnInit {
  userNav = [
    {
      route: '/cart',
      iconName: 'bag-handle-outline',
      label: 'Bolsa De Compras',
    },
    {
      route: '/notificaciones',
      iconName: 'notifications-outline',
      label: 'Notificaciones',
    },
    {
      route: '/catalogo',
      iconName: 'pricetags-outline',
      label: 'Mis compras',
    },
    {
      route: '',
      iconName: 'search-outline',
      label: 'Buscar por categoria',
    },
    
  ];
  departments=['Electronico','Moda','Belleza y cuidado personal']
  user$:Observable<UserCredentials | null>=this.authSvc.authState();
  constructor(private authSvc:AuthService) {}
  ngOnInit() {
    // this.user$.pipe(map(value=> Object.keys(value).map(key => ({ key, value })))).subscribe(v=>console.log(v))
  }
  signOut(){
    this.authSvc.signOut();
  }
}
