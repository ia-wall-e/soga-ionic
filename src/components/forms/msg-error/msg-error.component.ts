import { Component, Input, OnInit } from '@angular/core';
import {errorsDictionary} from './errors-dictionary'
import { RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.scss'],
})
export class MsgErrorComponent implements OnInit {
  @Input() forControl = '' as any;
  @Input() errorCode = [] as any;
  msgError(code:string):string {
    return errorsDictionary[code]
  }
  constructor() {}
  ngOnInit() {
  }
}
