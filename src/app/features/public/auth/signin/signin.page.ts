import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['../auth.scss'],
  standalone:false
})
export class SigninPage implements OnInit {
  constructor(private navCtrl: NavController) { }
  ngOnInit() { }
  back() {
    this.navCtrl.back();
  }
}
