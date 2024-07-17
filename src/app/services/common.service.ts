import { Injectable,ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  /**Input**/
  showPass(elemRef:ElementRef, icon:string) {
    const inputHTML = elemRef?.nativeElement;
    console.log(inputHTML.type);
    if (inputHTML.type == 'password') {
      inputHTML.type = 'text';
      icon = 'eye-off-outline';
    } else {
      inputHTML.type = 'password';
      icon = 'eye-outline';
    }
  }
}
