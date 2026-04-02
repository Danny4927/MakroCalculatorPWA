import { Injectable, signal, computed } from '@angular/core';

/**
 * RMR coefficients per gender and age group (Mifflin-St Jeor / WHO).
 * Index: 0 = 10-18, 1 = 19-30, 2 = 31-60, 3 = >60
 */
const RMR_COEFFICIENTS = {
  male:   [17.686, 15.057, 11.472, 11.711],
  female: [13.384, 14.818,  8.126,  9.082]
} as const;

const PAL_VALUES: Record<string, number> = {
  '1': 1.2,
  '2': 1.4,
  '3': 1.5,
  '4': 1.6,
  '5': 1.75,
  '6': 1.9,
  '7': 2.0,
  '8': 2.2
};

@Injectable({ providedIn: 'root' })
export class CalculationService {
  /** Resting Metabolic Rate in kcal/day */
  readonly rmr = signal<number>(0);

  /** Physical Activity Level multiplier */
  readonly pal = signal<number>(1);

  /** Total daily energy expenditure (TDEE) */
  readonly tdee = computed(() => this.rmr() * this.pal());

  calculateRMR(ageGroup: string, weight: number, gender: string): void {
    const coefficients = gender === 'male' ? RMR_COEFFICIENTS.male : RMR_COEFFICIENTS.female;
    const index = parseInt(ageGroup, 10);
    const coeff = coefficients[index as keyof typeof coefficients] ?? coefficients[1];
    this.rmr.set(Math.round(coeff * weight + 200));
  }

  setActivityLevel(palKey: string): void {
    this.pal.set(PAL_VALUES[palKey] ?? 1);
  }

  reset(): void {
    this.rmr.set(0);
    this.pal.set(1);
  }
}
