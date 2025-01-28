import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//formularios
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//widgets-module
import { WidgetsModule } from '../widgets/widgets.module';
//swiper
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
//componentes
import { AddCartComponent } from './modal/add-cart/add-cart.component';
import { BannerAComponent } from './banner/banner-a/banner-a.component';
import { CartSidebarComponent } from './sidebar/cart-sidebar/cart-sidebar.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { HeaderMinorComponent } from './header/header-minor/header-minor.component';
import { HeaderModalComponent } from './header/header-modal/header-modal.component';
import { MenuSidebarComponent } from './sidebar/menu-sidebar/menu-sidebar.component';
import { ModBasicStaticComponent } from './modulos/mod-basic-static/mod-basic-static.component';
import { ModBasicSlideComponent } from './modulos/mod-basic-slide/mod-basic-slide.component';
import { SearchMainComponent } from './search/search-main/search-main.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
//


@NgModule({
  declarations: [
    AddCartComponent,
    BannerAComponent,
    CartSidebarComponent,
    HeaderMainComponent,
    HeaderMinorComponent,
    HeaderModalComponent,
    MenuSidebarComponent, 
    ModBasicStaticComponent,
    ModBasicSlideComponent,
    SearchMainComponent,
    SigninComponent,
    SignupComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    WidgetsModule
  ],
  exports:[
    AddCartComponent,
    BannerAComponent,
    CartSidebarComponent,
    HeaderMainComponent,
    HeaderMinorComponent,
    HeaderModalComponent,
    MenuSidebarComponent,  
    ModBasicStaticComponent,
    ModBasicSlideComponent,
    SearchMainComponent,
    SigninComponent,
    SignupComponent,
  
    //modulo
    WidgetsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
