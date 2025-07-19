import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should notify cart update', (done) => {
    const service: ProductService = TestBed.inject(ProductService);
    service.cartUpdate$.subscribe(update => {
      expect(update.action).toBe('add');
      expect(update.productId).toBe(1);
      done();
    });
    service.notifyCartUpdate('add', 1);
  });

  it('should fetch product data from API', (done) => {
    const service: ProductService = TestBed.inject(ProductService);
    const mockProducts = [
      { id: 1, title: 'Product 1', image: 'image1.jpg', description: 'Description 1', category: 'Category 1', price: 100, rating: { rate: 4.5, count: 10 } },
      { id: 2, title: 'Product 2', image: 'image2.jpg', description: 'Description 2', category: 'Category 2', price: 200, rating: { rate: 4.0, count: 20 } }
    ];

    spyOn(service, 'fetchProductData').and.returnValue(of(mockProducts));

    service.fetchProductData().subscribe(products => {
      expect(products).toEqual(mockProducts);
      done();
    });
  });

  it('should delete a cart item', () => {
    const service: ProductService = TestBed.inject(ProductService);
    const mockCart = [
      { id: 1, title: 'Product 1', image: 'image1.jpg', description: 'Description 1', category: 'Category 1', price: 100, rating: { rate: 4.5, count: 10 } },
      { id: 2, title: 'Product 2', image: 'image2.jpg', description: 'Description 2', category: 'Category 2', price: 200, rating: { rate: 4.0, count: 20 } }
    ];

    service.cartService.next(mockCart);
    service.deleteCartItem(1);

    service.cartService.subscribe(updatedCart => {
      expect(updatedCart.length).toBe(1);
      expect(updatedCart[0].id).toBe(2);
    });
  });
});
