import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntroComponent} from './intro/intro.component';
import {PalComponent} from './pal/pal.component';
import {ResultComponent} from './result/result.component';
import {RmrComponent} from './rmr/rmr.component';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {FormsModule} from '@angular/forms';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';



@NgModule({
  declarations: [
    IntroComponent,
    PalComponent,
    ResultComponent,
    RmrComponent
  ],
  exports: [
    IntroComponent,
    RmrComponent,
    PalComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class EnergyModule { }
