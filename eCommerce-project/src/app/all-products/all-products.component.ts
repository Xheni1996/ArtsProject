import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  products: Product[] | any;

  constructor(private productsService: ProductsService) {
    this.ngOnInIt();
  }

  ngOnInIt(): void {
    this.showAllPaintingsComponent();
  }

  showAllPaintingsComponent() {
    this.productsService.getAllPaintings().subscribe((result) => {
      this.products = result;
    });
  }
}
