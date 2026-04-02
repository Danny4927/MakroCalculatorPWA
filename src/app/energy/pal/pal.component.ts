import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CalculationService } from '../../services/calculation/calculation.service';

@Component({
  selector: 'app-pal',
  standalone: true,
  imports: [FormsModule, MatRadioModule],
  templateUrl: './pal.component.html',
  styleUrl: './pal.component.scss'
})
export class PalComponent {
  readonly pal = signal<string>('');

  constructor(private readonly service: CalculationService) {}

  setActivityLevel(): void {
    this.service.setActivityLevel(this.pal());
  }
}
