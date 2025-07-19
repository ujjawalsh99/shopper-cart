import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductGroupComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ShoppingCart})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
