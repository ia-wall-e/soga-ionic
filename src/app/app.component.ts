import { Component } from '@angular/core';
import { AuthService } from '@myServices/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authSvc: AuthService) {
  }
  ngOnInit(){
    this.authSvc.authState().subscribe((v)=>{(v)?console.log('Online'):console.log('OffLine')})
  }
    
}
