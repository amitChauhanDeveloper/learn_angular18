import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../model/class/product';
import { CONSTANT } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  onRoleSubjectChange$ : Subject<string> = new Subject<string>

   onRoleBehaviourChange$ : BehaviorSubject<string> = new BehaviorSubject<string>("");


  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(CONSTANT.API_URL_PRODUCT);
  }

  saveNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(CONSTANT.API_URL_PRODUCT, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${CONSTANT.API_URL_PRODUCT}${CONSTANT.PRODUCT_METHODS.COMMON_PATH}${product.id}`,
      product
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(
      `${CONSTANT.API_URL_PRODUCT}${CONSTANT.PRODUCT_METHODS.COMMON_PATH}${id}`
    );
  }

}
