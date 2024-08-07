import { Component, OnInit } from '@angular/core';
import { AuthService } from '@myServices/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  /*** ***/
  constructor(private authSvc: AuthService) {}
  /*** ***/
  ngOnInit() {}
  signOut() {
    this.authSvc.signOut();
  }
}
