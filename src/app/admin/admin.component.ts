import { Component, OnInit } from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from '../keg.model';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [KegService]
})
export class AdminComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;

  constructor(private router: Router, private kegService: KegService) { }

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }

  submitForm(brand: string, name: string, price: string) {
    var newKeg: Keg = new Keg(brand, name, price);
    this.kegService.addKeg(newKeg);
  }
}
