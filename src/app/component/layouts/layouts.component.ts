import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { User } from '../model/class/User';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

  isNavbarOpen = false;
  isDropdownDirectiveOpen = false;
  isDropdownFromsOpen = false;
  isDropdownDecoratorOpen = false;
  loggedUserData: User = new User();
  selectRole: string = '';

  constructor(private router: Router,private productService: ProductService) {
    const loggedData = localStorage.getItem('loginUserData');

    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
      
    }

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
    localStorage.removeItem('token'); 
    localStorage.removeItem('loginUserData');
    localStorage.removeItem('userRegisterData');
    this.router.navigateByUrl('login')
  }

  onRoleChange(role: string){    
    this.productService.onRoleSubjectChange$.next(role);
    this.productService.onRoleBehaviourChange$.next(role);
    
  }
}
