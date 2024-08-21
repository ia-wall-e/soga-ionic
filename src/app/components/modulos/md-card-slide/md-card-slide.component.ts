import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-md-card-slide',
  templateUrl: './md-card-slide.component.html',
  styleUrls: ['./md-card-slide.component.scss'],
})
export class MdCardSlideComponent  implements OnInit,AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined; 
@Input() dataModulo?:any;
  constructor() { }

  ngOnInit() {
  
   
  }
  ngAfterViewInit(){
    const swiperEl:HTMLElement=  this.swiperRef?.nativeElement;
    console.log(this.swiperRef?.nativeElement);
     console.log(swiperEl);
      /**/ 
    const swiperParams = {
      slidesPerView: 8,
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 7,
        },
      },
      on: {
        init() {
        },
      },
    };
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    // swiperEl.initialize();
  }
}
