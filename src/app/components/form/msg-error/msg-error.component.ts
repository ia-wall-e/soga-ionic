import { Component, OnInit,Input } from '@angular/core';
import { errorsDictionary } from './error-dictionary';
@Component({
  selector: 'app-msg-error',
  template: `<div class="error-control" *ngIf="forControl.invalid && (forControl.touched || forControl.dirty)">
    <p class="error-msg">{{msgError()}}</p>
</div>`,
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
