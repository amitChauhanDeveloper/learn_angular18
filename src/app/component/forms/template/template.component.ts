import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from "../../reusable-component/alert/alert.component";
import { MyButtonComponent } from "../../reusable-component/my-button/my-button.component";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe, AlertComponent, MyButtonComponent],
  templateUrl: './template.component.html',
})
export class TemplateComponent {

  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    pincode: '',
    isAcceptTerms: false
  }

  fromValue: any;

  onSubmit(){
    this.fromValue = this.studentObj
  }

  resetFrom(){
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      pincode: '',
      isAcceptTerms: false
    }
  }

  getData(data: any){

    alert(data)

  }

}
