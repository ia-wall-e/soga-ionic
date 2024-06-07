import { Component, OnInit, inject } from '@angular/core';
import { CatalogService } from '@myServices/catalog.service';
import { Product } from '@myInterfaces/product-interface';
import { AuthService } from '@myServices/auth.service';
import { UserCredentials } from '@myInterfaces/user-credentials';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private catalogSvc= inject(CatalogService);
  //#Propiedades
  headTaste = {} as any;
  headTop = {} as any;
  items: Product[] = [];
  itemsTop: Product[] = [];
  params = {} as any;
 
  ngOnInit() {
    this.moduloOne();
    this.moduloTwo();
  }

  moduloOne() {
    this.params = {
      limit: '5',
      title: 'Segus Tus Gustos',
      subtitle: 'Segun tus busquedas'
    };
    this.builderModule(this.params, this.items, this.headTaste);
  }

  moduloTwo() {
    this.params = {
      limit: '5',
      title: 'Lo mas vendido',
      subtitle: 'Lo mas vendido de la semana'
    };
    this.builderModule(this.params, this.itemsTop, this.headTop);
  }

  private builderModule(params: any, targetArray: Product[], head: any) {
    this.catalogSvc.getItems(params).subscribe({
      next: (res: Product[]) => {
        console.log('http catalogo ejecutandose')
        targetArray.push(...res);
      },
      error: (error: any) => {
        console.error(error)
      },
      complete: () => {
        head.title = params.title;
        head.subtitle = params.subtitle;
      }
    });
  }
  /*
  recibirEvento(data){
    console.log('Recibido')
  }
  */
}

