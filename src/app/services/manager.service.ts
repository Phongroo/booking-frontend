import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  public cart(cart:any){
    return this.http.get(`${baseUrl}/cart/`,cart);
  }
  public addcart(cart:any){
    return this.http.post(`${baseUrl}/cart/createCart`,cart);
  }
  public updateCart(cart:any){
    return this.http.post(`${baseUrl}/cart/updateCart`,cart);
  }
  public delete(cartId:any){
    return this.http.delete(`${baseUrl}/cart/delete/${cartId}`);
  }
  public getcartId(cartId:any){
    return this.http.post(`${baseUrl}/cart/updateproduct`,cartId);
  }

}
