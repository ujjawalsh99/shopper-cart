import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../utilities/interface/product';
import { PRODUCT_URL } from '../utilities/constant';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private getProductDataFromAPI(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_URL);
  }

  public fetchProductData(): Observable<Product[]> {
    return this.getProductDataFromAPI();
  }
}
