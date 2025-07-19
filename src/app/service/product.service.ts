import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../utilities/interface/product';
import { PRODUCT_URL } from '../utilities/constant';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public cartService: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  private cartUpdateSubject = new Subject<{action: string, productId?: number}>();
  
  cartUpdate$ = this.cartUpdateSubject.asObservable();

  notifyCartUpdate(action: string, productId?: number) {
    this.cartUpdateSubject.next({action, productId});
  }

  private getProductDataFromAPI(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_URL);
  }

  public fetchProductData(): Observable<Product[]> {
    return this.getProductDataFromAPI();
  }

  public deleteCartItem(item: number): void {
    const updatedCart = this.cartService.value.filter((_, index) => _.id !== item);
    this.cartService.next(updatedCart);
  }
}
