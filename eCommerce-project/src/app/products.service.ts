import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllPaintings(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      'http://localhost:5000/api/paintings'
    );
  }

  getPainting(paintingId: Number | string): Observable<Product> {
    return this.httpClient.get<Product>(
      'http://localhost:5000/api/painting/' + paintingId
    );
  }
}
