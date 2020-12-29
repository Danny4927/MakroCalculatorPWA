import {Component, OnInit} from '@angular/core';
import {CalculationService} from '../../services/calculation/calculation.service';

@Component({
  selector: 'app-rmr-step',
  templateUrl: './rmr.component.html',
  styleUrls: ['./rmr.component.scss']
})
export class RmrComponent implements OnInit {
  gender: string;
  age: string;
  weight: number;

  constructor(public service: CalculationService) {
  }

  ngOnInit() {
  }

  calculateRMR() {
    if (this.age && this.weight && this.gender) {
      this.service.calculateRMR(this.age, this.weight, this.gender);
    }
  }
}
