import { Component, OnInit } from '@angular/core';
import {CalculationService} from '../../services/calculation/calculation.service';

@Component({
  selector: 'app-pal',
  templateUrl: './pal.component.html',
  styleUrls: ['./pal.component.scss']
})
export class PalComponent implements OnInit {
  pal: string;

  constructor(private service: CalculationService) { }

  ngOnInit() {
  }

  setActivityLevel() {
    this.service.setActivityLevel(this.pal);
  }
}
