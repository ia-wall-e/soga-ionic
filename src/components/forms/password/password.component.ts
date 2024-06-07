import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent  implements OnInit {
@Input() groupName=""; 
  constructor() { }

  ngOnInit() {}

}
