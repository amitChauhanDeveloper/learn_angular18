import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, timeout, throwError } from 'rxjs';
import { CONSTANT } from '../constant/constant';
import { User } from '../model/class/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: User = new User();
  isLoading: boolean = false; // To track loading state
  message: string = ''; // Message for success or error

  router = inject(Router);
  http = inject(HttpClient);

  // Hard-coded login
  onLogin() {
    if (this.userObj.username === "admin" && this.userObj.password === "admin") {
      localStorage.setItem('loginUser', this.userObj.username);
      this.message = 'Login successful!';
      this.router.navigateByUrl('home');
    } else {
      this.message = 'Wrong credentials!';
      this.router.navigateByUrl('');
    }
  }

  // API call login with timeout
  onLoginWithApi(obj: any) {
    this.isLoading = true; // Start the loader
    this.message = ''; // Clear any previous message

    this.http.post(CONSTANT.API_URL_USER, obj).pipe(
      timeout(5000), // Set a timeout of 5 seconds
      catchError((error) => this.handleError(error))
    ).subscribe(
      (res: any) => {
        this.isLoading = false; // Stop the loader
        // Handle response
        if (res.message === 'User not found with email') {
          this.message = 'User not found! Please check your username.';
        } else if (res.message === 'Invalid username or password !!') {
          this.message = 'Invalid username or password. Please try again.';
        } else if (res.user && res.user.id) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('loginUserData', JSON.stringify(res.user));
          this.message = 'Login successful!';
          this.router.navigateByUrl('home');
        } else {
          this.message = 'Something went wrong. Please try again later.';
          this.router.navigateByUrl('');
        }
      },
      (error) => {
        this.isLoading = false; // Stop the loader even on error
        console.error(error);
      }
    );
  }

  private handleError(error: any) {
    this.isLoading = false; 
    if (error.name === 'TimeoutError') {
      this.message = 'The request took too long to respond. Please try again later.';
    } else if (error.status === 400) {
      this.message = 'Invalid username or password !!';
    } else if (error.status === 404) {
      this.message = 'User not found with email';
    } else {
      this.message = 'An unknown error occurred. Please try again later.';
    }
    return throwError(() => new Error(this.message)); 
  }

}
