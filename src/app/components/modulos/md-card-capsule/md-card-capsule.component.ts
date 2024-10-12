import { Component, input, OnInit,effect } from '@angular/core';
import { modulo } from '@myInterfaces/modulo';
@Component({
  selector: 'app-md-card-capsule',
  templateUrl: './md-card-capsule.component.html',
  styleUrls: ['./md-card-capsule.component.scss'],
})
export class MdCardCapsuleComponent implements OnInit {
  //#region - Propiedades
 dataModulo= input<modulo>();
  stateComponent: boolean = false;
  items: any[] = [1, 2, 3]
  //*
  title?:string;
  subtitle?:string;
  logo?:string;
  //#endregion
  constructor() {
   effect(()=>{
    console.log(this.dataModulo())
    if(this.dataModulo()?.state===true){
      this.items=this.dataModulo()?.products;
      this.title=this.dataModulo()?.headline.title;
      this.subtitle=this.dataModulo()?.headline.subtitle;
      this.stateComponent=true;
    }
   })
   }
  //#region - LifeCycle
  ngOnInit() { 
    console.log(this.dataModulo())
  }
  //#endregion
}
// 