import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductCardComponent } from './product-card.component';
import { Product } from 'src/app/utilities/interface/product';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockProduct: Product = {
    id: 1,
    title: 'Test Product',
    image: 'test-image.jpg',
    description: 'Test description',
    category: 'test',
    price: 99.99,
    rating: {
      rate: 4.5,
      count: 100
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the product card', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#product-container')).toBeTruthy();
    expect(compiled.querySelector('img')?.src).toContain('test-image.jpg');
    expect(compiled.querySelector('h1')?.textContent).toContain('Test Product');
  });

  it('should toggle addedToCart when addToCart is called', () => {
    const fixture = TestBed.createComponent(ProductCardComponent);
    const component = fixture.componentInstance;
    component.product = {
      id: 1,
      title: 'Test Product',
      image: 'test-image.jpg',
      description: 'Test description',
      category: 'test',
      price: 99.99,
      rating: {
        rate: 4.5,
        count: 100
      }
    };
    fixture.detectChanges();

    expect(component.addedToCart).toBe(false);
    component.addToCart(component.product);
    expect(component.addedToCart).toBe(true);
  });
});
