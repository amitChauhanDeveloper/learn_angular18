import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionTimeoutService {
  private timeout: any;
  private warningTimeout: any;
  private readonly TIMEOUT_PERIOD = 48 * 60 * 60 * 1000; // 48 hours for demonstration

  private modalSubject = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.resetTimer();
    this.addActivityListeners();
  }

  get modalStatus$() {
    return this.modalSubject.asObservable();
  }

  private resetTimer() {
    this.clearTimers();
    this.timeout = setTimeout(() => this.logout(), this.TIMEOUT_PERIOD);
  }

  private clearTimers() {
    if (this.timeout) clearTimeout(this.timeout);
    if (this.warningTimeout) clearTimeout(this.warningTimeout);
  }

  private addActivityListeners() {
    window.addEventListener('mousemove', this.resetTimer.bind(this));
    window.addEventListener('keypress', this.resetTimer.bind(this));
    window.addEventListener('touchstart', this.resetTimer.bind(this));
  }

  public logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/session-out']);
  }
}
