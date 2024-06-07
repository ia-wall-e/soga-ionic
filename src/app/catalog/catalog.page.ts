import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Product } from '@myInterfaces/product-interface';
import { CatalogService } from '@myServices/catalog.service';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {
  headTop = {} as any;
  products: Product[] = [];
  constructor(
    private productsSvc: CatalogService,
    private activityRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.initCatalog();
    if (this.activityRoute.snapshot.queryParamMap.get('orderBy') === 'price') {
      //¡este se utiliza para los parametros de consulta  queryParams
      console.log("ordenar por precio")
    }
  }
  initCatalog() {
    this.headTop = {
      title: 'Catalogo',
      subtitle: 'Mira todos nuestro articulos',
    };
    this.productsSvc.getCatalog().subscribe({
      next: (res: any) => {
        this.products.push(...res);
      
      },
      error: (error: any) => {},
    });
  }

  orderBy(type:any) {
    if (type === 'price') {
      console.log('Ordenado por precio');
      this.products.sort((a, b) => a.price - b.price);
    }else if (type === 'category') {
      console.log('Ordenado por categoria');
      this.products.sort((a, b) => a.category.localeCompare(b.category));
    }
  }
}
