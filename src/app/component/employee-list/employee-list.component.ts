import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  template: '<h1 class="primary"> Hello From Admin </h1>',
  styles: ['.primary{color:green}']
  // templateUrl: './employee-list.component.html',
  // styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

}
