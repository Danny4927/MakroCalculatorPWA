import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { IntroComponent } from '../energy/intro/intro.component';
import { RmrComponent } from '../energy/rmr/rmr.component';
import { PalComponent } from '../energy/pal/pal.component';
import { ResultComponent } from '../energy/result/result.component';
import { SidenavMenuComponent } from '../sidenav-menu/sidenav-menu.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    IntroComponent,
    RmrComponent,
    PalComponent,
    ResultComponent,
    SidenavMenuComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {}
