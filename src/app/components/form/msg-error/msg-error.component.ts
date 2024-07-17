import { Component, OnInit,Input } from '@angular/core';
import { errorsDictionary } from './error-dictionary';
@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.scss'],
})
export class MsgErrorComponent  implements OnInit {
@Input() forControl="" as any;
code?:string;
constructor(){}
ngOnInit() {}
msgError(){
  this.code= Object.keys(this.forControl.errors)[0]
 return errorsDictionary[this.code]
}
}
