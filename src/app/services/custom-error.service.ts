import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
export class CustomError extends Error {
  code: string;

  constructor(message: string, code: string) {
    super(message);
    this.code = code;
    this.name = 'CustomError'; // Opcional: Cambiar el nombre del error si lo deseas
  }
}
@Injectable({
  providedIn: 'root',
})
export class CustomErrorService {
  //#region Auth-Branch
  // Método para crear un error personalizado
  customError(message: string, code: string): CustomError {
    return new CustomError(message, code);
  }

  // Método para manejar errores en el flujo del observable
  handleError(error: any) {
    // Aquí puedes agregar lógica para manejar diferentes tipos de errores
    console.error('Error:', error.message || error);
    return throwError(error);
  }
  //#endregion
}
