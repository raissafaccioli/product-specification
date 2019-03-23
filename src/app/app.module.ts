import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductSpecificationComponent } from './product-specification/product-specification.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSpecificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
