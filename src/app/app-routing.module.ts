import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
const routes: Routes = [
 
  {path:"home",component:ContentComponent},
  {path: 'users', loadChildren : ()=> import('./user/user.module').then(m => m.UserModule)},
  {path:'products',loadChildren:()=>
  import('./product/product.module').then(m=>m.ProductModule)},

  { path: 'main-invoice', component: MainInvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
 {path:"**" , component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
