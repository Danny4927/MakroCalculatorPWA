import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatLegacyButtonModule],
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
