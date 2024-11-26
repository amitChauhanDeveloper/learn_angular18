import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

  isNavbarOpen = false;
  isDropdownDirectiveOpen = false;
  isDropdownFromsOpen = false;
  isDropdownDecoratorOpen = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isNavbarOpen = false;
      this.isDropdownDirectiveOpen = false;
      this.isDropdownFromsOpen = false;
      this.isDropdownDecoratorOpen = false;
    });
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleDropdownDirective() {
    this.isDropdownDirectiveOpen = !this.isDropdownDirectiveOpen;
  }

  toggleDropdownFroms() {
    this.isDropdownFromsOpen = !this.isDropdownFromsOpen;
  }

  toggleDropdownDecorator() {
    this.isDropdownDecoratorOpen = !this.isDropdownDecoratorOpen;
  }

  logout(){
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login')
  }
}
