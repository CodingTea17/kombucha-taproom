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
  currentRoute: string = this.router.url;

  constructor(private router: Router, private kegService: KegService) {}

  ngOnInit(){
    this.kegs = this.kegService.getKegs();
  }

  pintsLeftProgressBar(theKeg) {
    if (theKeg.pints > 93) {
      return "progress-bar bg-success";
    } else if (theKeg.pints > 31) {
      return "progress-bar bg-warning";
    } else {
      return "progress-bar bg-danger";
    }
  }

  pintsLeft(theKeg) {
    return `${Math.ceil((theKeg.pints/124) * 100)}%`;
  }

  submitForm(brand: string, name: string, price: string) {
    var newKeg: Keg = new Keg(brand, name, price);
    this.kegService.addKeg(newKeg);
  }

}
