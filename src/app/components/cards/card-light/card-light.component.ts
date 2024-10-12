import { Component, effect, input, OnInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-card-light',
  templateUrl: './card-light.component.html',
  styleUrls: ['./card-light.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CardLightComponent implements OnInit{
 item=input<any>();
  image?: string;
  price?:string;
  stateComponent: boolean = false;
  constructor(private router: Router,private renderer:Renderer2) { 
    effect(()=>{
      // console.log(this.item())
      if(this.item()){
        // (this.item().images)?this.image=this.item().images[0]:this.image=this.item().image;
        this.image= this.item().thumbnail;
        this.price=this.item().price;
        this.stateComponent= true;
      }
    })
    
  }
  ngOnInit(){
    // console.log(this.renderer)
  }
handlerError(){
  console.log(this.renderer)
}
  toStand() {
    // const item = this.item;
    // this.router.navigate(['stand'], { state: { data: item } })
  }
  // private imageError(){
  //   this.renderer.setStyle(this.el.nativeElement, 'display', 'none'); 
  // }
}
