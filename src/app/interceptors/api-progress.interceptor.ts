// import { HttpInterceptorFn } from '@angular/common/http';

// export const apiProgressInterceptor: HttpInterceptorFn = (req, next) => { 
//   console.log("Interceptor ejecutandose")
//   return next(req);
// };

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CHECK_JWT } from './PROTECTED_API';

@Injectable()
export class apiProgressInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isProtected = req.context.get(CHECK_JWT);
    if(isProtected){
      console.log('interceptor ejecutandose')
      return next.handle(req).pipe(
        tap((event: HttpEvent<any>) => {
          if (event.type === 4) { // 4 es el tipo de evento para la respuesta final
            console.log('La consulta a la API ha terminado');
            // Aquí puedes agregar la lógica que desees ejecutar cuando la consulta termine
          }
        })
      );
    }
    return next.handle(req);
  }
}
