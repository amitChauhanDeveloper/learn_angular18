import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
})
export class NgTemplateComponent {

  isUserLoggedIn: boolean = false;
  loggerUserName: string = 'User Is Logged In !';

  @ViewChild('dynamicTem') dynaTemplate : TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer',{read:ViewContainerRef}) dynaContainer : ViewContainerRef | undefined;

  loadTemplate(){
    if (this.dynaTemplate) {
      this.dynaContainer?.createEmbeddedView(this.dynaTemplate)
      
    }

  }

  login(){
    this.isUserLoggedIn = true
  }

  logout(){
    this.isUserLoggedIn = false
  }

}
