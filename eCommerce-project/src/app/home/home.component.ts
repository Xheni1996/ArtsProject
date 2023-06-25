import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: Product[] | any;

  constructor(private productsService: ProductsService) {
    this.ngOnInIt();
  }

  ngOnInIt(): void {
    this.getAllPaintingsComponent();
  }

  getAllPaintingsComponent() {
    this.productsService.getAllPaintings().subscribe((result) => {
      this.products = result;
    });
  }
}
