import { Component, AfterViewInit, ElementRef, ViewChild, input, Input, effect } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-mod-basic-slide',
  templateUrl: './mod-basic-slide.component.html',
  styleUrls: ['./mod-basic-slide.component.scss'],
  standalone:false
})
export class ModBasicSlideComponent  implements AfterViewInit {

  @ViewChild('swiper') swiperRef?: ElementRef | null;
  data = input<any>();
  @Input() customClass?: string;
  prefix?: number;
  state: boolean = false;
  items = new Array(6).fill(null);
  // swiper?: Swiper;
  constructor() {
    effect(() => {
      console.log(this.data())
      if (this.data() && this.data().products)
        this.items = this.data().products;
      this.prefix = this.data().prefix;
      this.state = true;
    })
  }

  ngAfterViewInit() {
    const swiperEl = this.swiperRef?.nativeElement;
    const swiperParams: SwiperOptions = {
      slidesPerView: 'auto',
      spaceBetween:0,
      resizeObserver: true,
    }
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }

}
