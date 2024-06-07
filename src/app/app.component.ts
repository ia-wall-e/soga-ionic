import { Component, Output,EventEmitter, inject } from '@angular/core';
import { AuthService } from '@myServices/auth.service';
// import { EventService } from '@myServices/event.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  authSvc = inject(AuthService);
  constructor() {
    this.authSvc.authState().subscribe((user) => {
     (user)?console.info(user):console.info('User:'+ user)
    });
  }
}
