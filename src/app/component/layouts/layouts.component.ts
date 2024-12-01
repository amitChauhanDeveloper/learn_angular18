import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { User } from '../model/class/User';
import { ProductService } from '../service/product.service';
import { IUser } from '../model/interface/IUser';

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
  loggedUserData: IUser = new IUser();
  selectRole: string = '';

  constructor(private router: Router,private productService: ProductService) {
  const loggedData = sessionStorage.getItem('loginUserData');
  const userRegisterData = sessionStorage.getItem('userRegisterData');

    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
      
    }else if (userRegisterData != null) {
      this.loggedUserData = JSON.parse(userRegisterData);
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
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('login')
  }

  onRoleChange(role: string){    
    this.productService.onRoleSubjectChange$.next(role);
    this.productService.onRoleBehaviourChange$.next(role);
    
  }
}
