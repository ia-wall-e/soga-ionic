import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@myServices/auth.service';
import { UtilsService } from '@myServices/utils.service';
import { UserCredentials } from '@myInterfaces/user-credentials';
@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
})
export class NavDrawerComponent implements OnInit {
  authSvc = inject(AuthService);
  utilSvc = inject(UtilsService);
  //#PROPIEDADES
  $logState = this.authSvc.authState$;
  user?: UserCredentials;
  menuOpt: any;
  //#METODOS
  ngOnInit(): void {
    this.$logState.subscribe((x) => {
      this.user=x;
    });
    this.menuOpt = [
      {
        route: '/cart',
        icon: '../assets/icon/bag.svg',
        label: 'Carrito',
      },
      {
        route: '/notificaciones',
        icon: '../assets/icon/bell.svg',
        label: 'Notificaciones',
      },
      {
        route: '/catalogo',
        iconName: 'pricetags-outline',
        label: 'Catalogo',
      },
      {
        route: '/exercise',
        iconName: 'construct-outline',
        label: 'Ejemplo Y Practica',
      },
    ];
  }

  logOut() {
    this.authSvc.signOut();
  }
}
