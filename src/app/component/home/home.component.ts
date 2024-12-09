import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedColor: string = '#ff0000';

  router = inject(Router);

  // Use this for external navigation
  redirectOnPersonalFinanceTrackerPage(): void {
    window.location.href = 'https://personal-finance-tracker-three-sigma.vercel.app/';
  }

}
