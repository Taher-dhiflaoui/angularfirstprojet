import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import {ProductsComponent} from "./products/products.component";
import { ListProductsComponent } from './list-products/list-products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
