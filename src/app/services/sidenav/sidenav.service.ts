import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidenavService {
  /** Signal-based open/close state for the sidenav */
  readonly opened = signal(false);

  toggle(): void {
    this.opened.update(v => !v);
  }
}
