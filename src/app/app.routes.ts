import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { StructuralDirComponent } from './component/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './component/directive/attribute-dir/attribute-dir.component';
import { ControlComponent } from './control/control.component';

export const routes: Routes = [
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'structural-dir',
    component: StructuralDirComponent
  },
  {
    path: 'attribute-dir',
    component: AttributeDirComponent
  },
  {
    path: 'control-statement',
    component: ControlComponent
  }
];
