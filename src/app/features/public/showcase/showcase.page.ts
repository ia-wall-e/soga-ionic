import { Component, effect, ElementRef, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CatalogService } from '@myServices/catalog.service';
import { ShoppingCartService } from '@myServices/shopping-cart.service';
import { Subscription } from 'rxjs';
import { AddCartComponent } from 'src/app/shared/components/modal/add-cart/add-cart.component';
import { ModalGenericComponent } from 'src/app/shared/widgets/modal-generic/modal-generic.component';

import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.page.html',
  styleUrls: ['./showcase.page.scss'],
  standalone: false
})
export class ShowcasePage implements OnInit {
  available: boolean = false;
  @ViewChild('swiper') swiperRef?: ElementRef;
  @ViewChild('feature') featureRef?: TemplateRef<any>;
  @ViewChild('description') descriptionRef?: TemplateRef<any>;
  id?: any;
  product?: any;
  sub$?: Subscription;
  rating = signal<any>(null);
  constructor(
    private cartSvc: ShoppingCartService,
    private activatedRoute: ActivatedRoute,
    private catalogSvc: CatalogService,
    private modalCtrl: ModalController) {
  }
  //#region - Hooks
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.sub$ = this.catalogSvc.getProductId(this.id).subscribe({
      next: (data) => {
        // console.log(data)
        const rating = this.round(data.rating)
        this.product = data;
        this.rating.set(rating);
        this.available=true;
      },
      error: (error) => { console.error(error) }
    })
  }
  ngAfterViewInit(): void {
    const swiperEl = this.swiperRef?.nativeElement;
    const params: SwiperOptions = {
      pagination: true,
      on: {
        init() {
          console.log('swiper inicializado -  stand')
        }
      }
    }
    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }
  ngOnDestroy() {
    this.sub$?.unsubscribe()
  }
  //#endregion
  //#region - Add to Cart
  handlerAddToCart(product: any) {
    // console.log(product);
    this.cartSvc.addItem(product);
    this.addToCartModal()
  }
  async addToCartModal() {
    const modal = await this.modalCtrl.create({
      component: AddCartComponent,
      cssClass: 'modal-add-cart',
      // animated:true,
      // breakpoints: [0, 0.5, 1],
      // initialBreakpoint: 1,
      componentProps: { product: this.product },
    });
    await modal.present();
  }
  async genericModal(type: 'feature' | 'description') {
    const template = type == 'feature' ? this.featureRef : this.descriptionRef
    const modal = await this.modalCtrl.create({
      component: ModalGenericComponent,
      componentProps: {
        title: '',
        template: template
      }
    })
    await modal.present();
  }
  //#endregion
  //#region - Metodo para rebuild
  round(num: number): number {
    return Math.round(num * 10) / 10;
  }
  //#endregion
}
