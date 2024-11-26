import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {

  //String, number, boolean, date
  courseName: string = "angular 18";
  stateName: string = "";
  inputType = "checkbox";
  myClassName: string = "bg-primary";
  enrollNum: number = 123;
  flag: boolean = true;
  currentDate: Date = new Date();

  firstName = signal("Amit Chauhan");

  constructor(){

  }

  changeCourseName(){
    this.courseName = "Java";
    this.firstName.set("Reema Chauhan");

  }

  showAlert(message: string){
    alert(message);
  }

}
