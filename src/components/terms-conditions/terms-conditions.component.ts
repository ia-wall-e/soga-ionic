import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent implements OnInit {
  //#===VALORES DE ENTRADA Y SALIDA===//
  //boton back
  @Output() backButton = new EventEmitter();
  //solo lectura o aceptacion de terminos
  @Input() onlyRead: boolean = true;
  constructor() {}
  //#===METODOS===//
  ngOnInit() {}
  prevElement(): void {
    this.backButton.emit();
  }
}
