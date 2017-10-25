import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  kegs = KEGS;
}

const KEGS: Keg[] = [
  new Keg("Humm", "Lemon Ginger", "3.00"),
  new Keg("Humm", "Blueberry Mint", "3.00"),
  new Keg("GT's", "Gingerade", "2.50"),
  new Keg("Lion Heart Kombucha", "Ginger Fixx", "3.50"),
  new Keg("Soma", "Cherry Chia", "4.00")
];
