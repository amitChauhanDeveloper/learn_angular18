import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html'
})
export class NgContainerComponent {

  isContainer : boolean = true;

  http = inject(HttpClient);

  constructor(public productService: ProductService){

  }

  isLoading: Boolean = false;

  productList: any[] = [];

  getAllProduct() {
    this.isLoading = true;
  
    this.productService.getAllProduct().subscribe(
      (res: any) => {
        this.productList = res;
        this.isLoading = false
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

}
