import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntroComponent} from './intro/intro.component';
import {PalComponent} from './pal/pal.component';
import {ResultComponent} from './result/result.component';
import {RmrComponent} from './rmr/rmr.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



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
