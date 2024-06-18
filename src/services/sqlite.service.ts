import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
//¡
import { CapacitorSQLite, JsonSQLite } from '@capacitor-community/sqlite';
import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';
//¡
@Injectable({
  providedIn: 'root',
})
export class SqliteService {
  private http = inject(HttpClient);
  dbReady: BehaviorSubject<boolean>;
  isWeb: boolean = false;
  private dbName: string;
  //#
  constructor() {
    this.dbReady = new BehaviorSubject(false);
  }
  //#
  async initDbLocal() {
    //verificar tipo de dispositivo
    const type = await Device.getInfo();
    const sqlite = CapacitorSQLite as any;
    if (type.platform == 'web') {
      this.isWeb = true;
      sqlite.initWebStore();
    }
    //iniciar database
    this.startDb();
  }
  //#
 private async startDb() {
    //saber si existe la base de datos
    const existDb = await Preferences.get({ key: 'first_setup_key' });
    if (!existDb.value) {
      //si no existe crearla
      this.downloadDb()
    }else{
      //si existe cargarla
     this.dbName= (await Preferences.get({ key: 'dbName'})).value;
     await CapacitorSQLite.createConnection({database: this.dbName});
     await CapacitorSQLite.open({database: this.dbName});
     this.dbReady.next(true);
    }
  }
  //#
 private downloadDb() {
    this.http
      .get('assets/database/db.json')
      .subscribe(async (data: JsonSQLite) => {
        const dataString = JSON.stringify(data);
        const isValid = await CapacitorSQLite.isJsonValid({
          jsonstring: dataString,
        });
        if (isValid) {
          this.dbName=data.database;
         await CapacitorSQLite.importFromJson({ jsonstring: dataString});
         await CapacitorSQLite.createConnection({database: this.dbName});
         await CapacitorSQLite.open({database: this.dbName});
         await Preferences.set({ key: 'first_setup_key', value : "1" });
         await Preferences.set({ key: 'dbName', value : this.dbName });
         this.dbReady.next(true);
        }
      });
  }
}
