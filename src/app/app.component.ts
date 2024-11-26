import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';

  // State variables for managing UI visibility
  isNavbarOpen = false;
  isDropdownOpen: { [key: string]: boolean } = {
    directive: false,
    forms: false
  };

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.resetNavbarAndDropdowns());
  }

  // Toggle navbar visibility
  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Generic toggle for dropdowns
  toggleDropdown(menu: 'directive' | 'forms'): void {
    // Close all dropdowns before toggling the target
    this.resetDropdowns();
    this.isDropdownOpen[menu] = !this.isDropdownOpen[menu];
  }

  // Reset all dropdowns to closed state
  private resetDropdowns(): void {
    this.isDropdownOpen = {
      directive: false,
      forms: false
    };
  }

  // Reset all navbar and dropdown states on navigation
  private resetNavbarAndDropdowns(): void {
    this.isNavbarOpen = false;
    this.resetDropdowns();
  }
  
}
