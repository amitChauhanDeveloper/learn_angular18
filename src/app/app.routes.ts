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
import { ApiIntegration } from './component/api-integration/api-integration.component';
import { LifecycleEventComponent } from './component/lifecycle-event/lifecycle-event.component';
import { NgTemplateComponent } from './component/directive/ng-template/ng-template.component';
import { NgContainerComponent } from './component/directive/ng-container/ng-container.component';
import { ViewChildComponent } from './component/decorator/view-child/view-child.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutsComponent } from './component/layouts/layouts.component';

export const routes: Routes = [
  //default route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
      },
      {
        path: 'structural-dir',
        component: StructuralDirComponent,
      },
      {
        path: 'attribute-dir',
        component: AttributeDirComponent,
      },
      {
        path: 'control-statement',
        component: ControlComponent,
      },
      {
        path: 'pipe',
        component: PipeComponent,
      },
      {
        path: 'template-from',
        component: TemplateComponent,
      },
      {
        path: 'reactive-from',
        component: ReactiveComponent,
      },
      {
        path: 'api-integration',
        component: ApiIntegration,
      },
      {
        path: 'life-cycle',
        component: LifecycleEventComponent,
      },
      {
        path: 'ng-template',
        component: NgTemplateComponent,
      },
      {
        path: 'ng-container',
        component: NgContainerComponent,
      },
      {
        path: 'view-child',
        component: ViewChildComponent,
      },
    ],
  },
];
