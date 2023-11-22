import { Component } from '@angular/core';
import { ProductService } from 'src/app/Core/Services/product.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
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
