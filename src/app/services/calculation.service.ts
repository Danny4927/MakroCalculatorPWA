import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  rmr: number;
  pal: number;
  gender: string;

  constructor() {
  }


  calculateRMR(age: string, weight: number, gender: string) {
    this.gender = gender;
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

  setActivityLevel(actiLevel: string) {
    if (this.gender === 'male') {
      switch (actiLevel) {
        case '1':
          this.pal = 1.2;
          break;
        case '2':
          this.pal = 1.3;
          break;
        case '3':
          this.pal = 1.4;
          break;
        case '4':
          this.pal = 1.5;
          break;
        case '5':
          this.pal = 1.7;
          break;
        case '6':
          this.pal = 1.8;
          break;
        case '7':
          this.pal = 2.1;
          break;
        case '8':
          this.pal = 2.3;
          break;
      }
    }
    if (this.gender === 'female') {
      switch (actiLevel) {
        case '1':
          this.pal = 1.2;
          break;
        case '2':
          this.pal = 1.3;
          break;
        case '3':
          this.pal = 1.4;
          break;
        case '4':
          this.pal = 1.5;
          break;
        case '5':
          this.pal = 1.6;
          break;
        case '6':
          this.pal = 1.7;
          break;
        case '7':
          this.pal = 1.8;
          break;
        case '8':
          this.pal = 2.0;
          break;
      }
    }
  }
}
