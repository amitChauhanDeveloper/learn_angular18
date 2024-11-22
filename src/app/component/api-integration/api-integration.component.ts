import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css'
})
export class ApiIntegrationComponent {

  productList: any[] = [];

  constructor(private http: HttpClient){

  }

  getAllProduct(){
    this.http.get("https://productservice-k7di.onrender.com/api/products").subscribe((res:any)=>{
      this.productList = res;
      console.log(res);
    },error=>{
      console.log("Error for backend");
      
    })
  }
}
