import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule],
})
export class SidenavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToRMR() {
    // TODO: routing
  }

  navigateToBMI() {
    // TODO: routing
  }
}
