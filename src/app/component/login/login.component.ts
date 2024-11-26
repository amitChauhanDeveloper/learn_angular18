import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    username: '',
    password: ''
  }

  router = inject(Router);
  http = inject(HttpClient);

  onLogin(){
    if (this.userObj.username == "admin" && this.userObj.password == "admin") {
      localStorage.setItem('loginUser',this.userObj.username)
      this.router.navigateByUrl('home')
    }else{
      alert('Wrong credentials !')
      this.router.navigateByUrl('')
    }
  }

  onLoginWithApi(obj: any) {
    this.http.post("https://blog-app-apis-2o43.onrender.com/api/v1/auth/login", obj).pipe(
      catchError((error) => this.handleError(error))
    ).subscribe(
      (res: any) => {
        // Check for specific messages in the response
        if (res.message === 'User not found with email') {
          alert('User not found! Please check your username.');
        } else if (res.message === 'Invalid username or password !!') {
          alert('Invalid username or password. Please try again.');
        } else if (res.user && res.user.id) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('loginUserData', JSON.stringify(res.user));
          alert('Login successful!');
          this.router.navigateByUrl('home');
        } else {
          alert('Something went wrong. Please try again later.');
          this.router.navigateByUrl('');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred. Please try again later.';

    if (error.status === 400) {
      errorMessage = 'Invalid username or password !!';
    } else if (error.status === 404) {
      errorMessage = 'User not found with email';
    }

    alert(errorMessage);  // Show the error message
    return throwError(() => new Error(errorMessage));  // Propagate the error for further handling if needed
  }

}
