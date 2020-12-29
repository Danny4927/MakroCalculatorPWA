import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
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
