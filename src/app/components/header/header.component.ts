import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private productService: ProductService) { }

  cartCount$ = 0;

  ngOnInit(): void {
    this.productService.cartService.subscribe(cartItems => {
      this.cartCount$ = cartItems.length;
    });
  }

}
