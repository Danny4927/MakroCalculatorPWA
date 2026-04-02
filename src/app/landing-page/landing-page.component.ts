import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { IntroComponent } from '../energy/intro/intro.component';
import { RmrComponent } from '../energy/rmr/rmr.component';
import { PalComponent } from '../energy/pal/pal.component';
import { ResultComponent } from '../energy/result/result.component';
import { SidenavMenuComponent } from '../sidenav-menu/sidenav-menu.component';
import { SidenavService } from '../services/sidenav/sidenav.service';
import { CalculationService } from '../services/calculation/calculation.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    IntroComponent,
    RmrComponent,
    PalComponent,
    ResultComponent,
    SidenavMenuComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  readonly sidenavService = inject(SidenavService);
  readonly service = inject(CalculationService);

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}
