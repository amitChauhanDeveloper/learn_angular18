import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../model/class/product';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule,ConfirmationModalComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  paginatedList: Product[] = [];
  currentPage: number = 1;
  rowsPerPage: number = 5; // Show 5 rows per page
  totalRecords: number = 0;
  totalPages: number = 0;
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';  // To store success message
  pageInput: number = this.currentPage; // Store the page number input for the user
  isDeleteModalVisible: boolean = false;
  selectedProductId: number | null = null;

  constructor(public productService: ProductService) {}

  productObj = new Product;

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.isLoading = true;
    this.errorMessage = '';

    this.productService.getAllProduct().subscribe(
      (res: any) => {
        this.productList = res;
        this.totalRecords = res.length; // Assuming res contains the full list of products
        this.totalPages = Math.ceil(this.totalRecords / this.rowsPerPage); // Calculate total pages
        this.paginate(); // Update paginated data
        this.isLoading = false;
      },
      (error: any) => {
        this.errorMessage = 'Failed to load products. Please try again later.';
        this.isLoading = false;

        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      }
    );
  }

  paginate() {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.paginatedList = this.productList.slice(startIndex, endIndex);
  }

  // Method to go to next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
      this.pageInput = this.currentPage; // Update input field to reflect current page
    }
  }

  // Method to go to previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
      this.pageInput = this.currentPage; // Update input field to reflect current page
    }
  }

  // Method to jump to the selected page
  jumpToPage() {
    if (this.pageInput >= 1 && this.pageInput <= this.totalPages) {
      this.currentPage = this.pageInput;
      this.paginate();
    } else {
      this.errorMessage = 'Invalid page number';
      setTimeout(() => {
        this.errorMessage = '';  // Hide message after 5 seconds
      }, 5000);
    }
  }

  resetFrom() {
    this.productObj = new Product();
  }

  onEdit(data: any) {
    this.productObj = { ...data };
  }

  onSave() {
    this.productService.saveNewProduct(this.productObj).subscribe(
      (res: any) => {
        if (res.id) {
          this.successMessage = 'Product created successfully!';
          this.getAllProduct();
          setTimeout(() => {
            this.successMessage = ''; // Hide success message after 2 seconds
          }, 2000);
        } else {
          this.errorMessage = 'Something went wrong!';
          setTimeout(() => {
            this.errorMessage = ''; // Hide error message after 2 seconds
          }, 2000);
        }
      },
      (_error: any) => {
        this.errorMessage = 'Failed to save product. Please try again.';
        setTimeout(() => {
          this.errorMessage = ''; // Hide error message after 2 seconds
        }, 2000);
      }
    );
  }
  
  onUpdate() {
    this.productService.updateProduct(this.productObj).subscribe(
      (res: any) => {
        if (res.id) {
          this.successMessage = 'Product updated successfully!';
          this.getAllProduct();
          setTimeout(() => {
            this.successMessage = ''; // Hide success message after 2 seconds
          }, 2000);
        } else {
          this.errorMessage = 'Something went wrong!';
          setTimeout(() => {
            this.errorMessage = ''; // Hide error message after 2 seconds
          }, 2000);
        }
      },
      (_error: any) => {
        this.errorMessage = 'Failed to update product. Please try again.';
        setTimeout(() => {
          this.errorMessage = ''; // Hide error message after 2 seconds
        }, 2000);
      }
    );
  }

  showDeleteModal(productId: number) {
    this.selectedProductId = productId;
    this.isDeleteModalVisible = true;
  }

  closeDeleteModal() {
    this.isDeleteModalVisible = false;
    this.selectedProductId = null;
  }
  
  onDelete() {
    if (this.selectedProductId !== null) {
      this.productService.deleteProduct(this.selectedProductId).subscribe(
        (res: any) => {
          if (res.id) {
            this.successMessage = 'Product deleted successfully!';
            this.getAllProduct();
          } else {
            this.errorMessage = 'Something went wrong!';
          }
          this.closeDeleteModal();
          setTimeout(() => (this.successMessage = ''), 2000);
        },
        (_error: any) => {
          this.errorMessage = 'Failed to delete product. Please try again.';
          this.closeDeleteModal();
          setTimeout(() => (this.errorMessage = ''), 2000);
        }
      );
    }
  }
}
