import { Component, effect, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-basic',
  templateUrl: './item-basic.component.html',
  styleUrls: ['./item-basic.component.scss'],
  standalone:false
})
export class ItemBasicComponent  implements OnInit {

  item=input<any>();
  constructor() {
    effect(()=>{});
   }

  ngOnInit() {
    // console.log(this.item())
  }


}
