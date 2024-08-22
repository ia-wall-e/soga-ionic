import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import {Swiper, SwiperOptions} from 'swiper/types';


@Component({
  selector: 'app-md-card-slide',
  templateUrl: './md-card-slide.component.html',
  styleUrls: ['./md-card-slide.component.scss'],
})
export class MdCardSlideComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  @ViewChild('container') containerRef?: ElementRef;
  screenWidth: number;
  swiper?:any;
  @Input() dataModulo?: any;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    const swiper =this.swiperRef?.nativeElement;
    const options:SwiperOptions = {
      slidesPerView:1.8,
      breakpointsBase:'container',
      breakpoints:{
        335:{
          slidesPerView:2.1
        },
        373:{
          slidesPerView:2.5
        },
        440:{
          slidesPerView:3
        },
        490:{
          slidesPerView:3.1
        },
        528:{
          slidesPerView:3.5
        },
        595:{
          slidesPerView:4
        },
        645:{
          slidesPerView:4.1
        },
        683:{
          slidesPerView:4.5
        },
        750:{
          slidesPerView:5
        },
        800:{
          slidesPerView:5.1
        },
    
      }
    };
    Object.assign(swiper, options);
    swiper.initialize();
  }
  //#region - Ancho de pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const container =this.containerRef?.nativeElement;
    console.log(container.offsetWidth)
    this.screenWidth = window.innerWidth;
    // console.log('Ancho de pantalla cambiado:', this.screenWidth);
  }
  //#endregion
}
