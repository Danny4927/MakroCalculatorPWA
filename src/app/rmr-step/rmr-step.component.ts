import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rmr-step',
  templateUrl: './rmr-step.component.html',
  styleUrls: ['./rmr-step.component.scss']
})
export class RmrStepComponent implements OnInit {
  gender: string;
  age: string;
  weight: number;
  calories: number;

  constructor() {
  }

  ngOnInit() {
  }

  calculateRMR() {
    if (this.age && this.weight && this.gender) {
      this.calories = this.doCalculation();
    } else {
      this.calories = undefined;
    }
    console.log('age: ' + this.age + ', weight: ' + this.weight + ', gender: ' + this.gender);
  }

  private doCalculation() {
    // male
    if (this.gender === 'male') {
      switch (this.age) {
        case '0':
          return (17.5 * this.weight) + 651;
        case '1':
          return (15.3 * this.weight) + 679;
        case '2':
          return (11.6 * this.weight) + 879;
        case '3':
          return (13.5 * this.weight) + 487;
      }
    } else if (this.gender === 'female') {
      switch (this.age) {
        case '0':
          return (12.2 * this.weight) + 749;
        case '1':
          return (14.7 * this.weight) + 496;
        case '2':
          return (8.7 * this.weight) + 829;
        case '3':
          return (10.5 * this.weight) + 596;
      }
    }
  }
}
