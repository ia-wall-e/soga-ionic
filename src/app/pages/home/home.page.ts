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
  items2:Product[]=[];
  constructor(private catalogSvc:CatalogService) { }

  ngOnInit() {
    this.moduloTest();
    this.moduloTestSlide();
  }
 moduloTest(){
  this.params = {
    limit: '5',
  };
  this.catalogSvc.apiTest(this.params).subscribe({
    next: (res: any[]) => {
      // console.log(res)
      // console.log('http catalogo ejecutandose')
      this.items.push(...res);
    },
    error: (error: any) => {
      console.error(error)
    },
    complete: () => {}
  });
 }
 moduloTestSlide(){
  this.builderModule(this.params, this.items2);
 }
 /*commons*/
 private builderModule(params: any, targetArray: Product[]) {
  this.catalogSvc.apiTest2(params).subscribe({
    next: (data: any[]) => {
      // console.log(data);
      // console.log('http catalogo ejecutandose')
      targetArray.push(...data);
    },
    error: (error: any) => {
      console.error(error)
    },
    complete: () => {}
  });
}
}
