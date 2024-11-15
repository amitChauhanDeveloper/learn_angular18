import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirComponent } from './component/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from "./component/directive/attribute-dir/attribute-dir.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
