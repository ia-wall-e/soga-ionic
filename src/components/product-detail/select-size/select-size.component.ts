import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-size',
  templateUrl: './select-size.component.html',
  styleUrls: ['./select-size.component.scss'],
})
export class SelectSizeComponent  implements OnInit {
selectedSize:string="";
selectedValue: string="";
  constructor() { }
  radioChanged(event:any) {
    // console.log('Radio chequeado:', typeof event);
    console.log('Radio chequeado:', event.detail.value);
  }
  onButtonClick() {
    console.log(this.selectedValue);
  }
  ngOnInit() {}

}
