import { Component, input, OnInit, effect } from '@angular/core';
import { ImageHandlerDirective } from 'src/app/directives/image-handler.directive';
@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.scss'],
})
export class CardBasicComponent implements OnInit {
  stateComponent: boolean = false;
  item = input<any>();
  title?: string;
  image?: string;
  price?:string;
  discount?:string;
  constructor() {
    effect(() => {
      console.log(this.item()?.title)
      if (this.item()) {
        this.title = this.item().title;
        this.image = this.item().thumbnail;
        this.price=this.item().price;
        this.discount=this.item().discountPercentage;
        this.stateComponent = true;
      }
    })
  }

  ngOnInit() { }
}
