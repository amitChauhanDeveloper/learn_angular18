import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control.component.html',
})
export class ControlComponent {

  dayNumber: String = '';
  cityArray: string[] = ['Select City','Ahmedabad','Gandhinagar','Kalol','Mahesana']

  studentList: any[]=[
    {studentId: 1, name: 'Amit', city: 'Kalol', isActive: true},
    {studentId: 2, name: 'Ajay', city: 'Mahesana', isActive: false},
    {studentId: 3, name: 'Naitik', city: 'Ahmedabad', isActive: true},
    {studentId: 4, name: 'Mohan', city: 'Chandkheda', isActive: false},
    {studentId: 5, name: 'Sanjay', city: 'Vadodara', isActive: false},
    {studentId: 6, name: 'Manan', city: 'Surat', isActive: false}
  ]

  constructor(private productService: ProductService){
    this.productService.onRoleSubjectChange$.subscribe((role: string)=> {
    })
    this.productService.onRoleBehaviourChange$.subscribe((role: string)=> {
    })
  }

}
