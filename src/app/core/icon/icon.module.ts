import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule,MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[MatIconModule],
  providers: [MatIconRegistry]
})
export class IconModule {
  constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { 
    this.registerIcons();
  }
  private registerIcons() {
    this.matIconRegistry.addSvgIcon(
      'bag',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/shopping_bag_1.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'like',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/thumb_up_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'dislike',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/thumb_down_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'flag',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/flag_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'close',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/close_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'local_shipping_light',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/local_shipping_2.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'redo_light',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/redo_2.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'verified_light',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/verified_2.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'shield_light',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/shield_2.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ruler_light',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/ruler_2.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'chevron_right',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/chevron_right_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'chevron_left',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/chevron_left_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'tune',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/tune_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'search',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/search_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'bag',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/bag_5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'notification',this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/notifications_5.svg')
    );
  }
 }
