import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from '../constant/constant';
import { IProduct } from '../model/interface/IProduct';
import { Product } from '../model/class/Product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

   productList: IProduct[] = [];

   productObj: Product = new Product();

   onRoleSubjectChange$ : Subject<string> = new Subject<string>

   onRoleBehaviourChange$ : BehaviorSubject<string> = new BehaviorSubject<string>("");


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
