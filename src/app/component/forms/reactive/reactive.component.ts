import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
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
}
