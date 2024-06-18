import { Injectable } from '@angular/core';
// import { PouchDB } from '../../node_modules/pouchdb';

@Injectable({
  providedIn: 'root'
})
export class PouchDBService {

  //   private db: PouchDB.database;
//   constructor() {
//     this.db = new PouchDB('userDB');
//   }
//   getAllDocs() {
//     return this.db.allDocs({ include_docs: true });
//   }
//   addDoc(doc: any) {
//     return this.db.put(doc);
//   }
//   deleteDoc(docId: string, revId: string) {
//     return this.db.remove(docId, revId);
//   }
//   info(){
//     return this.db.info();
//   }
}
