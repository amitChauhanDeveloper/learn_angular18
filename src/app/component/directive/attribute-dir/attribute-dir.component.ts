import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  isDiv1Visable: boolean = true;
  isDiv2Visable: boolean = true;
  num1: String = '';
  num2: String = '';
  isActive: boolean = false;
  seletedState: String = 'Bihar';

  cityArray: string[] = ['Select City','Ahmedabad','Gandhinagar','Kalol','Mahesana']

  studentList: any[]=[
    {studentId: 1, totalMark: 80, gender:'male', name: 'Amit', city: 'Kalol', isActive: true},
    {studentId: 2, totalMark: 75, gender:'female', name: 'Ajay', city: 'Mahesana', isActive: false},
    {studentId: 3, totalMark: 53, gender:'male', name: 'Naitik', city: 'Ahmedabad', isActive: true},
    {studentId: 4, totalMark: 45, gender:'male', name: 'Mohan', city: 'Chandkheda', isActive: false},
    {studentId: 5, totalMark: 95, gender:'female', name: 'Sanjay', city: 'Vadodara', isActive: false},
    {studentId: 6, totalMark: 70, gender:'male', name: 'Manan', city: 'Surat', isActive: false}
  ]

  customStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%',
    'text-align': 'center',
  };
  
  showDiv1(){
    this.isDiv1Visable = true;
  }

  hideDiv1(){
    this.isDiv1Visable = false;
  }

  toggleDiv2(){
    // short code
    this.isDiv2Visable = !this.isDiv2Visable;

    // long code
    // if (this.isDiv2Visable == true) {
    //   this.isDiv2Visable = false;
    // }else{
    //   this.isDiv2Visable = true;
    // }
  }

}
