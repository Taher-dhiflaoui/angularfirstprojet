import { Component } from '@angular/core';
import {Product} from "../../Models/product";
import {UserService} from "../../Core/Services/user.service";
import {ProductService} from "../../Core/Services/product.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  ListProduct:Product[]=[];
  count=0;
  constructor(private productsservice:ProductService) {
  }
  ngOnInit(){
    this.productsservice.getAllProducts().subscribe((data:Product[])=>this.ListProduct=data);
  }
  nbr(lib: string) {
    // Utilisez la méthode getAllProducts pour récupérer les données
    this.productsservice.getAllProducts().subscribe((data: Product[]) => {
      this.count = data.filter((product: Product) => product.libelle === lib).length;
      alert("count:"+this.count);
    });
  }


}
