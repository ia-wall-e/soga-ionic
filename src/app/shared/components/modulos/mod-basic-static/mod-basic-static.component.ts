import { Component, OnInit,input,effect } from '@angular/core';

@Component({
  selector: 'app-mod-basic-static',
  templateUrl: './mod-basic-static.component.html',
  styleUrls: ['./mod-basic-static.component.scss'],
  standalone:false
})
export class ModBasicStaticComponent  implements OnInit {
  available: boolean = false;
  data = input<any>();
  cssGrid=input<any>('grid-6');
  cssCard=input<any>('card-static');
  cssMod?:string='';
  items =new Array(6).fill(null);
  constructor() {
    effect(() => {
      console.log(this.data().products)
      if (this.data() && this.data().products) {
        this.available=true;
        this.available? this.items = this.data().products: null;
      }
    })
  }

  ngOnInit() {
    if (this.cssGrid()=="grid-4") {
      this.items =new Array(4).fill(null);
    }
  }

}
