import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(public userService: UserService){}

  userRegister(){
    this.userService.register(() => {
      this.fetchProducts();
    });
  }

  fetchProducts() {
    this.userService.getAllProduct().subscribe();
  }
}
