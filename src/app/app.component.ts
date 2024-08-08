import { Component ,OnDestroy} from '@angular/core';
import { AuthService } from '@myServices/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnDestroy {
  constructor(private authSvc: AuthService) {
  }
  ngOnInit(){
    this.authSvc.authState().subscribe((v)=>{(v)?console.log(v):console.log('OffLine')});
  }
    ngOnDestroy(){
      console.log("Hook Destroy App")
    }
}
