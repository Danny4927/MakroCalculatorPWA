import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CalculationService } from '../../services/calculation/calculation.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  constructor(public readonly service: CalculationService) {}
}
