import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [],
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
      

    })
  }
}
