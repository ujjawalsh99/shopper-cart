import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/utilities/interface/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  addedToCart: boolean = false;
  @Input() product!:Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.cartUpdate$.subscribe(update => {
    if (update.action === 'clear') {
      this.addedToCart = false;
    } else if (update.action === 'delete' && update.productId === this.product.id) {
      this.addedToCart = false;
    }
  });
  }

  addToCart(product: Product): void {
    this.addedToCart = !this.addedToCart;
    this.productService.cartService.next([...this.productService.cartService.value, product]);
  }

  removeFromCart(productId: number): void {
    this.addedToCart = !this.addedToCart;
    this.productService.deleteCartItem(productId)
  }

}
