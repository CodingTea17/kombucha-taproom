import { Component, OnInit } from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [KegService]
})
export class AdminComponent implements OnInit {

  constructor(private kegService: KegService) { }

  ngOnInit() {
  }

  submitForm(brand: string, name: string, price: string) {
    var newKeg: Keg = new Keg(brand, name, price);
  }
}
