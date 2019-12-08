import { Component, OnInit } from '@angular/core';
import {CalculationService} from '../services/calculation.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(private service: CalculationService) { }

  ngOnInit() {
  }

}
