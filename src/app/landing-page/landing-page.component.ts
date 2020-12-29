import { Component, OnInit } from '@angular/core';
import {CalculationService} from '../services/calculation/calculation.service';
import {SidenavService} from '../services/sidenav/sidenav.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public service: CalculationService, public sidenavService: SidenavService) { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavService.opened = !this.sidenavService.opened;
  }

}
