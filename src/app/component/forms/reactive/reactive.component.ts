import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertComponent } from "../../reusable-component/alert/alert.component";
import { MyButtonComponent } from "../../reusable-component/my-button/my-button.component";

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentFrom: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl(),
    email: new FormControl("",[Validators.email]),
    city: new FormControl(),
    state: new FormControl(),
    pinCode: new FormControl(),
    isAcceptTerms: new FormControl(),
  })

  alertMsg: string = 'I have change message using ngOnChange click on change message button';

  fromValue: any;

  onSave(){
    this.fromValue = this.studentFrom.value;
    console.log(this.fromValue);
    
   
  }

  resetFrom(){
    this.studentFrom.reset({
      firstName: "",      
      lastName: "",
      email: "",
      city: "",
      state: "",
      pinCode: "",
      isAcceptTerms: false 
    })
    
  }

  changeMsg(){
    this.alertMsg = 'Welcome to reactive from page'
  }
}
