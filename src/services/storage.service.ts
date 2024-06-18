import { Injectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storage = inject(Storage);
  private myStorage: Storage | null = null;
  constructor() {}
  //#crear el almacenamiento y establecer controlador
  async init() {
    const storage = await this.storage.create();
    this.myStorage = storage;
    console.log('Storage Iniciado');
  }
  //#guardar valor
  async set(key: string, value: any): Promise<void> {
    await this.myStorage?.set(key, value);
  }
  //#Obtener valor
  get(key: string): Promise<any> {
    return this.myStorage.get(key)
  }
  //#Eliminar valor
  async remove(key: string): Promise<any> {
    await this.myStorage.remove(key);
  }
  //#Eliminar todos los valores
  async clear(): Promise<any> {
    await this.myStorage.clear();
  }
  //#utils
  keyExist():Promise<any>{
   return this.myStorage.keys();
  }
}
