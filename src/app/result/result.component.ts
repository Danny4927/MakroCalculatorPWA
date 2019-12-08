import { Component, OnInit } from '@angular/core';
import {CalculationService} from '../services/calculation.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(public service: CalculationService) { }

  ngOnInit() {
  }

  getTotal() {
    return this.service.rmr * this.service.pal;
  }
}
