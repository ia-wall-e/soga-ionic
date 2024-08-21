import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-light',
  templateUrl: './card-light.component.html',
  styleUrls: ['./card-light.component.scss'],
})
export class CardLightComponent  implements OnInit {
@Input() item?:any
image?:string;
  constructor() { }

  ngOnInit() {
    this.image= this.item.images[1]
    // console.log(this.item.images[0])
  }

}
