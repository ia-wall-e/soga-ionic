import { Component, effect, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone:false
})
export class RatingComponent  implements OnInit {
available:boolean=false;
  data = input<any>(null);
  seeRating=input<any>(null);
  showRating:boolean=true;
  rating: any;
  constructor() {
    effect(()=>{
      (this.data())?this.rating = this.round(this.data()):null;
      (this.seeRating()=="false")?this.showRating=false:null;
      (this.data())?this.available=true:null;
    })
   }

  ngOnInit() {
    // console.log(this.data())
    // this.rating = this.data();
  }
  round(num: number): number {
    return Math.round(num * 10) / 10;
  }

}
