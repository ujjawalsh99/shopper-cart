import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LucideAngularModule, Trash, CircleX } from 'lucide-angular';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [
        HttpClientTestingModule,
        LucideAngularModule.pick({Trash, CircleX})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the cart', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div#cart-container')).toBeTruthy();
  });
});
