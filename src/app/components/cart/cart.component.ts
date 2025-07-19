import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/utilities/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.cartService.subscribe(item => {
      this.cartItems = item;
      this.calculateTotalPrice(item);
    })
  }

  calculateTotalPrice(cartItems: Product[]): void {
    this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  clearCart(): void {
    this.productService.cartService.next([]);
    this.productService.notifyCartUpdate('clear');
  }

  deleteItem(item: number): void {
    this.productService.deleteCartItem(item);
    this.productService.notifyCartUpdate('delete', item);
  }

}
