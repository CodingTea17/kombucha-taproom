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

  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }

  getKegById(kegId: string){
    return this.database.object('/kegs/' + kegId);
  }

  updateKeg(localUpdatedKeg){
    var kegEntryInFirebase = this.getKegById(localUpdatedKeg.$key);
    kegEntryInFirebase.update({brand: localUpdatedKeg.brand,
                                artist: localUpdatedKeg.name,
                                description: localUpdatedKeg.price});
  }

  sellPint(localKeg) {
    var kegEntryInFirebase = this.getKegById(localKeg.$key);
    kegEntryInFirebase.update({pints: localKeg.pints -= 1});
  }

  refillKeg(localKeg) {
    var kegEntryInFirebase = this.getKegById(localKeg.$key);
    kegEntryInFirebase.update({pints: localKeg.pints = 124});
  }
}
