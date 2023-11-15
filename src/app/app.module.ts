import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { TestDirective } from './test.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { UserService } from './Core/Services/user.service';
import{HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    TestDirective,
    ErrorPageComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ProductModule,
    HttpClientModule,
  ],
  providers: [InvoiceListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
