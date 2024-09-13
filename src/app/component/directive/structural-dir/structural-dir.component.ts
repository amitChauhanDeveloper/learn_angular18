import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visable: boolean = true;
  isDiv2Visable: boolean = true;
  num1: String = '';
  num2: String = '';
  isActive: boolean = false;
  seletedState: String = 'Bihar';

  cityArray: string[] = ['Select City','Ahmedabad','Gandhinagar','Kalol','Mahesana']

  studentList: any[]=[
    {studentId: 1, name: 'Amit', city: 'Kalol', isActive: true},
    {studentId: 2, name: 'Ajay', city: 'Mahesana', isActive: false},
    {studentId: 3, name: 'Naitik', city: 'Ahmedabad', isActive: true},
    {studentId: 4, name: 'Mohan', city: 'Chandkheda', isActive: false},
    {studentId: 5, name: 'Sanjay', city: 'Vadodara', isActive: false},
    {studentId: 6, name: 'Manan', city: 'Surat', isActive: false}
  ]

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
