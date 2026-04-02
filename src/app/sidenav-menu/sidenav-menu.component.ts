import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavService } from '../services/sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.scss'
})
export class SidenavMenuComponent {
  private readonly router = inject(Router);
  private readonly sidenavService = inject(SidenavService);

  navigateToRMR(): void {
    this.router.navigate(['/']);
    this.sidenavService.toggle();
  }

  navigateToBMI(): void {
    this.router.navigate(['/bmi']);
    this.sidenavService.toggle();
  }
}
