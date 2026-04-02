import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CalculationService } from '../../services/calculation/calculation.service';

@Component({
  selector: 'app-rmr-step',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  templateUrl: './rmr.component.html',
  styleUrl: './rmr.component.scss'
})
export class RmrComponent {
  readonly gender = signal<string>('');
  readonly age = signal<string>('');
  readonly weight = signal<number | null>(null);

  constructor(public readonly service: CalculationService) {}

  calculateRMR(): void {
    const w = this.weight();
    if (this.age() && w !== null && this.gender()) {
      this.service.calculateRMR(this.age(), w, this.gender());
    }
  }
}
