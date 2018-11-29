import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  url='http://localhost:1220/products/';
  loadAll():any{
    return this.http.get(this.url);
  }

  saveProduct(product){
    return this.http.post(this.url+'/product/filter/',product);
  }


  updateProduct(product){
    return this.http.post(this.url+'/product/filter/',product);
  }

  findById(prodId):any{
   return this.http.get(this.url+""+prodId);
  }

}