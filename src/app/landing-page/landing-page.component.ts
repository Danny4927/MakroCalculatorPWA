import { Component, OnInit } from '@angular/core';
import {CalculationService} from '../services/calculation/calculation.service';
import {SidenavService} from '../services/sidenav/sidenav.service';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { EnergyModule } from '../energy/energy.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavMenuComponent } from '../sidenav-menu/sidenav-menu.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [CommonModule, MatStepperModule, EnergyModule, MatIconModule, MatToolbarModule, MatSidenavModule, SidenavMenuComponent]
})
export class LandingPageComponent implements OnInit {

  constructor(public service: CalculationService, public sidenavService: SidenavService) { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavService.opened = !this.sidenavService.opened;
  }

}
