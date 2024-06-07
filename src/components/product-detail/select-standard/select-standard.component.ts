import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-select-standard',
  templateUrl:'./select-standard.component.html',
  styleUrls: ['./select-standard.component.scss'],
})
export class SelectStandardComponent  implements OnInit {
  @Input() optItem:{name:string, size:string, price:string}[]=[] ;
  constructor() { 
    console.log("SI SE ESTA EJECUTANDOI")
  }

  ngOnInit() {}

}
