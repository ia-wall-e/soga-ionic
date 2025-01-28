import { Injectable } from '@angular/core';
import { from, Observable, Subject, } from 'rxjs';
import PouchDB from 'pouchdb';
@Injectable({
  providedIn: 'root'
})
export class LocalDBService {
  db: any;
  change$ = new Subject<any>();
  constructor() {
    this.db = new PouchDB('my-database');
    this.db.changes({
      since: 'now',
      live: 'true',
      include_docs: true
    }).on('change', (change: any) => {
      console.log(change)
      this.change$.next(change)
    })
  }
  infoDB() {
    this.db.info().then(function (info: any) {
      console.log(info);
    })
  }
  async allDocuments() {
    return this.db.allDocs({ include_docs: true })
      .then((res: any) => res.rows.map((row: any) => row.doc))
      .catch((error: any) => console.log(error))
  }
  async createDocument(doc: any) {
    try { await this.db.put(doc); } catch (err) {
      console.error('El producto ya se encuentra en la lista')
      console.error(err)
    }
  }
  async deleteDocument(id: any) {
    await this.db.get(id)
      .then((x: any) => this.db.remove(x))
      .catch((err: any) => console.log(err))
  }
  getChangeStream(): Subject<any> {
    return this.change$;
  }
}
