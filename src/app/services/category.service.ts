import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public categories(category:any){
    return this.http.get(`${baseUrl}/category/`,category);
  }
  public addCategory(category:any){
    return this.http.post(`${baseUrl}/category/createCategory`,category);
  }
  public updateCategory(category:any){
    return this.http.post(`${baseUrl}/category/updateCategory`,category);
  }
  public deleteCategory(category:any){
    return this.http.post(`${baseUrl}/category/updateCategory`,category);
  }
  public getCategoryId(categoryId:any){
    return this.http.post(`${baseUrl}/category/updateCategory`,categoryId);
  }

}
