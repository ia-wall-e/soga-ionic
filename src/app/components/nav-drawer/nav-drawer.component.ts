import { Component, OnInit } from '@angular/core';
import { AuthService } from '@myServices/auth.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
})
export class NavDrawerComponent implements OnInit {
  userNav = [
    {
      route: '/cart',
      icon: '../assets/icon/bag.svg',
      label: 'Bolsa De Compras',
    },
    {
      route: '/notificaciones',
      icon: '../assets/icon/bell.svg',
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
  // authState=this.a
  constructor(private authSvc:AuthService) {
    this.authSvc.authState$.subscribe(r=>console.log(r))
  }
  ngOnInit() {}
}
