import { Component, input, OnInit } from '@angular/core';
import { AuthService } from '@myServices/auth.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
  standalone:false
})
export class MenuSidebarComponent  implements OnInit {
  content = input<any>();
  // user$ = this.authSvc.authState();
  userNav = [
    {
      route: '/cart',
      iconName: 'bag-handle-outline',
      iconSvg:'',
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
  constructor(private authSvc: AuthService) { }

  ngOnInit() { }
  signOut() {
    // this.authSvc.loginOut();
   }
}
