import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from '../constant/constant';
import { IProduct } from '../model/interface/IProduct';
import { Product } from '../model/class/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // apiUrl: string = 'https://productservice-k7di.onrender.com/api/products';
  constructor(private http:HttpClient) {}

   productList: IProduct[] = [];

   productObj: Product = new Product();


   getAllProduct() {
    return this.http.get(CONSTANT.API_URL_PRODUCT);
  }

  saveNewProduct(obj:any){
    return this.http.post(CONSTANT.API_URL_PRODUCT, obj)
  }

  onEdit(data: any) {
    this.productObj = data;
  }

  updateProduct(obj:any){
    return this.http.put(CONSTANT.API_URL_PRODUCT + CONSTANT.PRODUCT_METHODS.COMMON_PATH + 
      this.productObj.id ,obj)
  }

  onDelete(id: number) {
    return this.http.delete(CONSTANT.API_URL_PRODUCT + CONSTANT.PRODUCT_METHODS.COMMON_PATH + id)
  }
}
