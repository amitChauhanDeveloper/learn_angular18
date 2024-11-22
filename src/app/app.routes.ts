import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { StructuralDirComponent } from './component/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './component/directive/attribute-dir/attribute-dir.component';
import { ControlComponent } from './component/control/control.component';
import { HomeComponent } from './component/home/home.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { TemplateComponent } from './component/forms/template/template.component';
import { ReactiveComponent } from './component/forms/reactive/reactive.component';
import { ApiIntegrationComponent } from './component/api-integration/api-integration.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'template-from',
    component: TemplateComponent
  },
  {
    path: 'reactive-from',
    component: ReactiveComponent
  },
  {
    path: 'api-integration',
    component: ApiIntegrationComponent
  }
];
