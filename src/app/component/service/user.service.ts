import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, throwError, timeout, tap } from 'rxjs';
import { CONSTANT } from '../constant/constant';
import { User } from '../model/class/User';
import { UserRegister } from '../model/class/UserRegister';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userObj: User = new User();
  isLoading: boolean = false; // To track loading state
  message: string = ''; // Message for success or error
  userRegisterObj: UserRegister = new UserRegister();
  serverErrors: string[] = [];

  router = inject(Router);
  http = inject(HttpClient);

  // Method to fetch all products
  getAllProduct() {
    const apiUrl = CONSTANT.API_URL_PRODUCT;
    return this.http.get(apiUrl).pipe(
      timeout(5000),
      catchError((error) => {
        return of(null); // Return empty observable in case of error
      })
    );
  }

  // Hard-coded login
  onLogin(callback?: () => void) {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbWl0aGFyaWR3YXJjaGF1aGFuQGdtYWlsLmNvbSIsImV4cCI6MTczMzIyMDE2NiwiaWF0IjoxNzMzMjAyMTY2fQ.5p81MEZz--WPXH94Dw3eQaQ8w1x25v02AzAkrGdkiyooHUu9jnXQ06eJbpVOvGTiUkQG8r9SGcDRs4oU-oFa7g';
    if (this.userObj.username === 'admin' && this.userObj.password === 'admin') {
      localStorage.setItem('token',token)
      localStorage.setItem('loginUserData', JSON.stringify(this.userObj));
      this.router.navigateByUrl('home');
      // Execute the callback if provided
      if (callback) {
        callback();
      }
    } else {
      this.message = 'Wrong credentials!';
      this.router.navigateByUrl('');
    }
  }

  // API call login with timeout
  onLoginWithApi(obj: any,callback?: () => void) {
    this.isLoading = true; // Start loader
    this.message = ''; // Clear any previous message

    this.http
      .post(CONSTANT.API_URL_USER + CONSTANT.USER_METHOD.USER_LOGIN, obj)
      .pipe(
        timeout(5000), // Timeout of 5 seconds
        tap((res: any) => this.handleLoginResponse(res,callback)), // Process response
        catchError((error) => this.handleError(error)),
        tap(() => (this.isLoading = false)) // Ensure loader stops
      )
      .subscribe();
  }

  private handleLoginResponse(res: any,callback?: () => void) {
     if (res.user && res.user.id) {
      localStorage.setItem('token', res.token);
      localStorage.setItem('loginUserData', JSON.stringify(res.user));
      this.router.navigateByUrl('home');
      // Execute the callback if provided
      if (callback) {
        callback();
      }
    } else {
      this.message = 'Something went wrong. Please try again later.';
      this.router.navigateByUrl('');
    }
  }

  private handleError(error: any) {
    this.isLoading = false; 
    if (error.name === 'TimeoutError') {
      this.message = 'Server is down. Please try again later after 3 minutes.';
    } else if (error.status === 400) {
      this.message = 'Invalid username or password !!';
    } else if (error.status === 404) {
      this.message = 'User not found with email';
    } else {
      this.message = 'Gateway down by free render cloud platfrom!';
    }
    return of(null); // Return an empty observable to avoid errors
  }

  register(callback?: () => void) {
    this.isLoading = true;
    this.serverErrors = []; // Clear errors before a new submission

    this.http
      .post(CONSTANT.API_URL_USER + CONSTANT.USER_METHOD.USER_REGISTER, this.userRegisterObj)
      .pipe(
        timeout(5000), // Timeout of 5 seconds
        tap((res: any) => {
          if (res && res.user.id != null) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userRegisterData', JSON.stringify(res.user));
            this.router.navigateByUrl('home');
            if (callback) {
              callback();
            }
          }
        }),
        catchError((error) => {
          if (error.name === 'TimeoutError') {
            this.serverErrors.push('Server is down. Please try again later after 3 minutes.');
          } else if (error.status === 400 && error.error.errors) {
            this.serverErrors = error.error.errors.map((e: any) => e.defaultMessage);
          } else {
            this.serverErrors.push('This email user present!');
          }
          return of(null); // Return an empty observable to avoid errors
        }),
        tap(() => (this.isLoading = false)) // Ensure loader stops
      )
      .subscribe();
  }
}
