import { Injectable } from '@angular/core';
import {Product} from "../../Models/product";
import {HttpClient} from "@angular/common/http";
import {User} from "../../Models/user";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="http://localhost:3000/";

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get<Product[]>(this.url+"products");
  }

}
