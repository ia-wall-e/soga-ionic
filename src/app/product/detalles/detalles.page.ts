import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@myInterfaces/product-interface';
import { CatalogService } from '@myServices/catalog.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  product!: Product;
  constructor(
    private routeChild: ActivatedRoute,
    private catalogSvc: CatalogService
  ) {}

  ngOnInit() {
    try {
      //©NavController-recibir params
      // const params = this.routeChild.snapshot.queryParams;
      //  const productId = params['id'];
       // const type = params['type'];
      //¡©Router-recibir params
      const productId = this.routeChild.snapshot.paramMap.get('id');
      //©--
      if (productId) {
         this.catalogSvc.getProduct(Number(productId)).subscribe({
        next: (res: any) => {
          this.product = res;
        },
        error: (error: any) => {},
      });
      } else {
        console.log('No existe el parametro');
      }
    } catch (err) {
      console.log(err);
    }
  }
}
