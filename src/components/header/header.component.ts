import { Component,inject } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private authSvc= inject(AuthService);
  //#propiedades
  $logState= this.authSvc.authState$;

 

}
