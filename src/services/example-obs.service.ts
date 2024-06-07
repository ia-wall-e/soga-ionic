import { Injectable } from '@angular/core';
import { Subscription, Observable, of, from, Subject, Observer,take,interval } from 'rxjs';

import { startWith } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ExampleObsService {
//#Propiedades
//¡cuenta regresiva
duration:number=10;
countDown:Observable<any>= interval(3000).pipe(take(10));
  constructor() {

  }
 
}
