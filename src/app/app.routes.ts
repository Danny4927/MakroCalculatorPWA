import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BMIComponent } from './bmi/bmi.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'bmi', component: BMIComponent },
  { path: '**', redirectTo: '' }
];
