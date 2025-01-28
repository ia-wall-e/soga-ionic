import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-minor',
  templateUrl: './header-minor.component.html',
  styleUrls: ['./header-minor.component.scss'],
  standalone:false
})
export class HeaderMinorComponent  implements OnInit {
  constructor(private navCtrl:NavController) { }

  ngOnInit() {}
back(){
  this.navCtrl.back();
}
}
