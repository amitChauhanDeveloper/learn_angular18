import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SessionTimeoutService } from './component/service/session-timeout-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular_18_tutorial';

  constructor(private sessionService: SessionTimeoutService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/home']);
    }
  }

  
}
