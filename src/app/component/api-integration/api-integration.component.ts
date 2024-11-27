import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../model/class/Product';
import { IProduct } from '../model/interface/IProduct';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './api-integration.component.html',
})
export class ApiIntegration implements OnInit {

  constructor(public productService: ProductService){

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getAllProduct();
  }

  productList: IProduct[] = [];

  isLoading: Boolean = false;
  errorMessage: String = ''

  getAllProduct() {
    this.isLoading = true;
    this.errorMessage = ''; 
  
    this.productService.getAllProduct().subscribe(
      (res: any) => {
        this.productList = res;
        this.isLoading = false;
      },
      (error: any) => {
        this.errorMessage = 'Failed to load products. Please try again later.';
        console.error('Error fetching products:', error);
        this.isLoading = false; 

      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
      }
    );
  }

  onSave(){
    this.productService.saveNewProduct(this.productService.productObj).subscribe(
      (res: any) =>{
        if (res.id) {
          alert('Product created successfully!');
          this.getAllProduct();
        } else {
          alert('Something went wrong!');
        }
      }
    );
  }

  resetFrom() {
    this.productService.productObj = new Product();
  }

  onEdit(data: any) {
    this.productService.productObj = data;
  }

  onUpdate() {
    this.productService.updateProduct(this.productService.productObj)
      .subscribe((res: any) => {
        if (res.id) {
          alert('Product updated successfully!');
        } else {
          alert('Something went wrong!');
        }
      });
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      this.productService.onDelete(id)
        .subscribe((res: any) => {
          if (res.id) {
            alert('Product deleted successfully!');
            this.getAllProduct();
          } else {
            alert('Something went wrong!');
          }
        });
    }
  }
}
