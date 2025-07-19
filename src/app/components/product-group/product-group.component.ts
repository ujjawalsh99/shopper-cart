import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/utilities/interface/product';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.scss']
})
export class ProductGroupComponent implements OnInit {

  public productItems:Product[] = [];
  shimmerArray = Array(10).fill(0);
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.fetchProductData().subscribe((res) => {
      this.productItems = res;
      console.log(this.productItems);
      
    })
  }

}
