import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../model/class/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService){

  }

  productObj = new Product;

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getAllProduct();
  }

  productList: Product[] = [];

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
    this.productService.saveNewProduct(this.productObj).subscribe(
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
    this.productObj = new Product();
  }

  onEdit(data: any) {
    this.productObj = { ...data };
  }

  onUpdate() {
    this.productService.updateProduct(this.productObj)
      .subscribe((res: any) => {
        if (res.id) {
          alert('Product updated successfully!');
          this.getAllProduct();
        } else {
          alert('Something went wrong!');
        }
      });
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      this.productService.deleteProduct(id)
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
