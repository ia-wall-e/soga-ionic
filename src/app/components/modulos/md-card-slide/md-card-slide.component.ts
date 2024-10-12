import {
  Component,
  AfterViewInit,
  effect,
  ElementRef,
  input,
  Input,
  ViewChild,
} from '@angular/core';
import { modulo } from '@myInterfaces/modulo';
import { SwiperOptions } from 'swiper/types';
import SwiperCore from 'swiper';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-md-card-slide',
  templateUrl: './md-card-slide.component.html',
  styleUrls: ['./md-card-slide.component.scss', '../../cards/card-light/card-light.component.scss'],
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
export class MdCardSlideComponent implements  AfterViewInit{
  //#region - propiedades
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  dataModulo = input<modulo>();
  @Input() prefix?: string;
  title?: string;
  subtitle?: string;
  items =new Array(5).fill(null);
  // screenWidth: number;
  stateComponent: boolean = false;
  //*swiper 
  stateSwiper: boolean = false;
  //#endregion
  //#region - constructor
  constructor() {
    // this.screenWidth = window.innerWidth;
    effect(() => {
      const context={prefix:this.prefix}
      if (this.dataModulo()?.state === true) { 
        this.title=this.dataModulo()?.headline?.title;
        this.subtitle=this.dataModulo()?.headline?.subtitle;
        this.items=this.dataModulo()?.products;
        this.stateComponent=true;
      } else {
        this.stateComponent=false;
       }
    })
  }
  //#endregion
  //#region - lifecycle
  ngAfterViewInit() {
    this.swiperInit();
  }
  //#endregion
  //#region - Swiper
  swiperInit() {
    const swiper = this.swiperRef?.nativeElement;
   const swiperConfig:SwiperOptions = {
      slidesPerView: 1.8,
      breakpointsBase: 'container',
      breakpoints: {
        335: {
          slidesPerView: 2.1
        },
        373: {
          slidesPerView: 2.5
        },
        440: {
          slidesPerView: 3
        },
        490: {
          slidesPerView: 3.1
        },
        528: {
          slidesPerView: 3.5
        },
        595: {
          slidesPerView: 4
        },
        645: {
          slidesPerView: 4.1
        },
        683: {
          slidesPerView: 4.5
        },
        750: {
          slidesPerView: 5
        },
        800: {
          slidesPerView: 5.1
        },
  
      },
      navigation: {
        nextEl: `.${this.prefix}-next`,
        prevEl: `.${this.prefix}-prev`,
      },
      on: {
        init: () => {
          console.log('Swiper inicializado.');
          this.stateSwiper = true; // Cambiar estado de carga
        }
      }
    };
    Object.assign(swiper,swiperConfig);
    swiper.initialize();
  }
  //#endregion
  //#region - Ancho de pantalla
  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   const container =this.containerRef?.nativeElement;
  //   console.log(container.offsetWidth)
  //   this.screenWidth = window.innerWidth;
  //   console.log('Ancho de pantalla cambiado:', this.screenWidth);
  // }
  //#endregion
}
