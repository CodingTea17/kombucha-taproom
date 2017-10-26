import { Component, Input, OnInit } from '@angular/core';
import { KegService } from '../keg.service';

@Component({
  selector: '[app-edit-keg]',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {
  @Input() clickedKeg;

  constructor(private kegService: KegService) { }

  ngOnInit() {
  }

  updateKeg(kegToUpdate) {
    this.kegService.updateKeg(kegToUpdate);
  }

  sellPint(keg) {
    if(keg.pints - 1 >= 0){
      this.kegService.sellPint(keg);
    } else {
      keg.pints = 0;
    }
  }

  refillKeg(keg) {
    this.kegService.refillKeg(keg);
  }

}
