import { Component, effect, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone:false
})
export class RatingComponent  implements OnInit {

  data = input<any>(null);
  seeRating=input<any>(null);
  showRating:boolean=true;
  rating: any;
  constructor() {
    effect(()=>{
      
      this.rating = this.round(this.data())
      if(this.seeRating()=="false"){
        this.showRating=false
      }
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
