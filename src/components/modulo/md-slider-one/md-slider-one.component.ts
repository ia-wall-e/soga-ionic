import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { Swiper } from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { IonicSlides } from '@ionic/angular';
//¡swiper
import { register } from 'swiper/element/bundle';
//¡swiper register
register()
@Component({
  selector: 'app-md-slider-one',
  templateUrl: './md-slider-one.component.html',
  styleUrls: ['./md-slider-one.component.scss'],
})
export class MdSliderOneComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperOne') swiperRef?: ElementRef<{ swiper: Swiper }>;
  swiperModules = [IonicSlides];
  constructor() {}
  swiperConf = {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
    },
    pagination:{type:'bullets',clickable:true},
    breakpoints: {
      1250: {
        slidesPerView: 4,
      },
      1230: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1050: {
        slidesPerView: 3,
      },
      1034: {
        slidesPerView: 2.9,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        navigation: {
          disabledClass: 'swiper-button-hidden',
        },
      },
      0: {
        slidesPerView: 1,
        // centeredSlides: true, 
      },

    },
  };
  ngOnInit() {}
  ngAfterViewInit(): void {
    const swiperElem = document.querySelector('swiper-container');
    console.log(swiperElem);
    if (swiperElem) {
      Object.assign(swiperElem, this.swiperConf);
    }
  }
  onSlideChange() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }
  swiperSlideChanged(e: any) {}
}
