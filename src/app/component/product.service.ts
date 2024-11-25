import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'https://productservice-k7di.onrender.com/api/products';
  constructor(private http:HttpClient) {}

   productList: any[] = [];

   productObj: any = {
    id: 0,
    name: '',
    skuCode: '',
    quantity: '',
    price: '',
    description: '',
  };


   getAllProduct() {
    return this.http.get(this.apiUrl);
  }

  saveNewProduct(obj:any){
    return this.http.post(this.apiUrl, obj)
  }

  onEdit(data: any) {
    this.productObj = data;
  }

  updateProduct(obj:any){
    return this.http.put(this.apiUrl + "/" + this.productObj.id ,obj)
  }

  onDelete(id: number) {
    return this.http.delete(this.apiUrl + "/" + id)
  }
}
