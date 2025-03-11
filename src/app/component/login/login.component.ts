import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public userService: UserService){}

  //get all product api call from callback function because service start karne k liye

  // onLogin() {
  //   this.userService.onLogin(() => {
  //     this.fetchProducts();
  //   });
  // }

  onLoginWithApi() {
    this.userService.onLoginWithApi(this.userService.userObj, () => {
      this.fetchProducts();
    });
  }

  fetchProducts() {
    this.userService.getAllProduct().subscribe();
  }

}
