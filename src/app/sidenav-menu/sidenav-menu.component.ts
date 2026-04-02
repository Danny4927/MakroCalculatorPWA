import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.scss'
})
export class SidenavMenuComponent {}
