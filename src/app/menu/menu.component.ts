import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg.model';
import { Router } from '@angular/router';
import { KegService } from '../keg.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ KegService ]
})
export class MenuComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;

  constructor(private router: Router, private kegService: KegService) {}

  ngOnInit(){
    this.kegs = this.kegService.getKegs();
  }

  pintsLeftProgressBar(theKeg) {
    if (theKeg.pints > 31) {
      return "progress-bar bg-warning text-dark w-" + this.pintsLeft(theKeg);
    } else {
      return "progress-bar bg-danger w-" + this.pintsLeft(theKeg);
    }
  }

  pintsLeft(theKeg) {
    return ((theKeg.pints/124) * 100);
  }
}
