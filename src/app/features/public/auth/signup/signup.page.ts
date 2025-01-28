import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../auth.scss'],
  standalone:false
})
export class SignupPage {


  constructor(private navCtrl: NavController) { }
  back() {
    this.navCtrl.back();
  }
}
