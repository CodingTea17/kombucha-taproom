import { Injectable } from '@angular/core';
import { Keg } from './keg.model';
// import { KEGS } from './mock-kegs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.kegs = database.list('kegs');
  }

  getKegs() {
    return this.kegs;
  }
}
