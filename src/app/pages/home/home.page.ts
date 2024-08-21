import { Component, OnInit } from '@angular/core';
import { Product } from '@myInterfaces/product';
import { CatalogService } from '@myServices/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  params = {} as any;
  items: Product[] = [];
  constructor(private catalogSvc:CatalogService) { }

  ngOnInit() {
    this.moduloTest();
  }
 moduloTest(){
  this.params = {
    limit: '5',
    title: 'Segus Tus Gustos',
    subtitle: 'Segun tus busquedas'
  };
  this.builderModule(this.params, this.items);
 }
 private builderModule(params: any, targetArray: Product[]) {
  this.catalogSvc.apiTest(params).subscribe({
    next: (res: any[]) => {
      console.log(res)
      // console.log('http catalogo ejecutandose')
      targetArray.push(...res);
    },
    error: (error: any) => {
      console.error(error)
    },
    complete: () => {}
  });
}
}
