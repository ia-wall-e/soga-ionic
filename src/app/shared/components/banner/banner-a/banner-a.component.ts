import { Component,input,effect,ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-banner-a',
  templateUrl: './banner-a.component.html',
  styleUrls: ['./banner-a.component.scss'],
  standalone:false
})
export class BannerAComponent  implements AfterViewInit {

  data = input<any>();
  available: boolean = false;
  stateSwiper: boolean = false;
  items = new Array(1).fill(null);
  // image?:string;
  swiper?: Swiper;
  @ViewChild('swiper') swiperRef?: ElementRef;
  constructor() {
    effect(() => {
      console.log(this.data())
      if (this.data() && this.data()?.available == true) {
        this.items=this.data().main;
        this.available = true;
      
      }
    })
  }

  ngAfterViewInit() {
    const swiperEl = this.swiperRef?.nativeElement;
    const params: SwiperOptions = {
      slidesPerView: 1,
      pagination: true,
      navigation: {
        nextEl: `.nav-next`,
        prevEl: `.nav-prev`,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      on: {
        init: () => {
          // console.log('Swiper inicializado.');
          this.stateSwiper = true; // Cambiar estado de carga
        }
      }
    }
    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }
}
