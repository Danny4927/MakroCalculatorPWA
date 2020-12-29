import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import {FlexModule} from '@angular/flex-layout';
import { BMIComponent } from './bmi/bmi.component';
import {EnergyModule} from './energy/energy.module';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SidenavMenuComponent,
    BMIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatRadioModule,
    MatCardModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexModule,
    EnergyModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
