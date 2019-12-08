import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  rmr: number;

  constructor() {
  }


  calculateRMR(age: string, weight: number, gender: string) {
    if (gender === 'male') {
      switch (age) {
        case '0':
          this.rmr = (17.5 * weight) + 651;
          break;
        case '1':
          this.rmr = (15.3 * weight) + 679;
          break;
        case '2':
          this.rmr = (11.6 * weight) + 879;
          break;
        case '3':
          this.rmr = (13.5 * weight) + 487;
          break;
      }
    } else if (gender === 'female') {
      switch (age) {
        case '0':
          this.rmr = (12.2 * weight) + 749;
          break;
        case '1':
          this.rmr = (14.7 * weight) + 496;
          break;
        case '2':
          this.rmr = (8.7 * weight) + 829;
          break;
        case '3':
          this.rmr = (10.5 * weight) + 596;
          break;
      }
    }

  }
}
