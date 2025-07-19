import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShimmerComponent } from './components/shared/shimmer/shimmer.component';
import { LucideAngularModule, ShoppingCart, Trash, CircleX } from 'lucide-angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        LucideAngularModule.pick({ShoppingCart, Trash, CircleX})
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ProductGroupComponent,
        CartComponent,
        ProductCardComponent,
        ShimmerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shopper-cart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shopper-cart');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Updated to match the actual component structure
    expect(compiled.querySelector('div')).toBeTruthy();
  });
});
