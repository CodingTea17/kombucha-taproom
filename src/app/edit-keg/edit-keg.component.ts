import { Component, Input, OnInit } from '@angular/core';
import { KegService } from '../keg.service';

@Component({
  selector: '[app-edit-keg]',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {
  @Input() selectedKeg;

  constructor(private kegService: KegService) { }

  ngOnInit() {
  }

  updateKeg(kegToUpdate){
    this.kegService.updateKeg(kegToUpdate);
  }

}
