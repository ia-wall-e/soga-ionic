import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleObsService } from '@myServices/example-obs.service';
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
  //#Propiedades
  var1$!: Observable<any>;
  var2$!: Observable<any>;
  var3$!: Observable<any>;
  var4$!: Observable<any>;
  var1!: number;
  title: string = 'Titulo';
  //#Constructor
  constructor(private exampleObs: ExampleObsService) {}
  //#Metodos
  ngOnInit() {
    //©timers
    //¡es necesario capturar el contexto de ngOnInit 
    //¡para que reconozca el this dentro de la funcion
    setTimeout(this.greetings.bind(this), 5000);
    //©Variables del DOM
    //*var1$ //¡ funciona - con pipe Async
    this.var1$ = this.exampleObs.countDown;
    //*var2$ //¡ funciona - con pipe Async
    setTimeout(() => (this.var2$ = this.exampleObs.countDown), 2000);
    //*var3$ //¡ funciona - con pipe Async
    setTimeout(() => this.countDown(), 2000);
    //*var4$ //!no funciona
    /*
      ¡SOLUCION
      ¡However, this will still not work as expected,
      ¡because this inside the countDown2 method will not refer to the class instance. 
      ¡To fix this, you can use an arrow function to bind this to the class instance, like this: 
      ¡this.countDown2.bind(this)
    */
    setTimeout(this.countDown2, 2000);//no funciona
    // setTimeout(this.countDown2.bind(this), 2000); //funciona

    //*var1 //¡ funciona - NO pipe Async
    this.exampleObs.countDown.subscribe((e) => {
      this.var1 = e;
    });
  }
  greetings() {
    // console.log('funcion greetings');
    this.title = 'Hola estamos practicando observables';
  }
  countDown() {
    this.var3$ = this.exampleObs.countDown;
  }
  countDown2() {
    console.log('countDown2');
    console.log(this);
    this.var4$ = this.exampleObs.countDown;
  }
}
