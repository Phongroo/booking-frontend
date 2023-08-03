import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public product(product:any){
    return this.http.get(`${baseUrl}/product/`,product);
  }
  public addproduct(product:any){
    return this.http.post(`${baseUrl}/product/createProduct`,product);
  }
  public updateProduct(product:any){
    return this.http.post(`${baseUrl}/product/updateProduct`,product);
  }
  public delete(product:any){
    return this.http.post(`${baseUrl}/product/delete`,product);
  }
  public getproductId(productId:any){
    return this.http.post(`${baseUrl}/category/updateproduct`,productId);
  }

}
