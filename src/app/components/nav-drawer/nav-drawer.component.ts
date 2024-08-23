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
      iconSvg:'src="../../../assets/icon/bag.svg',
      label: 'Bolsa De Compras',
    },
    {
      route: '/notificaciones',
      iconName: 'notifications-outline',
      iconSvg:'src="../../../assets/icon/notification.svg',
      label: 'Notificaciones',
    },
    {
      route: '/catalogo',
      iconName: 'pricetags-outline',
      iconSvg:'src="../../../assets/icon/search.svg',
      label: 'Mis compras',
    },
    {
      route: '',
      iconName: 'search-outline',
      iconSvg:'src="../../../assets/icon/search.svg',
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
