import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CircleX, LucideAngularModule, ShoppingCart, Trash } from 'lucide-angular';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShimmerComponent } from './components/shared/shimmer/shimmer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductGroupComponent,
    CartComponent,
    ShimmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ShoppingCart, Trash, CircleX}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
