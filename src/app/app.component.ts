import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@myServices/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private authSvc: AuthService) {}
  ngOnInit() {
    this.authSvc.authState().subscribe({
      next: (v) => {
        v ? console.log('On-Line') : console.log('OffLine');
      },
      error:(e)=>console.log(e)
    });
  }
  ngOnDestroy() {
    console.log('Hook Destroy App');
  }
}
