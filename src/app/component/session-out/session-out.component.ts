import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-out',
  standalone: true,
  imports: [],
  templateUrl: './session-out.component.html',
  styleUrl: './session-out.component.css'
})
export class SessionOutComponent {

  constructor(private router: Router) {}

  // Navigate to the login page
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
