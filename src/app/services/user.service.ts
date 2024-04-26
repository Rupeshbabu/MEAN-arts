import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


import { apiUrls } from 'src/apis.url';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  setUserData(user: string): void {
    localStorage.setItem('user', user);
  }

  getUserData(): string | null {
    return localStorage.getItem('user');
  }

  removeUserData(): void {
    localStorage.removeItem('user');
  }

  getUserFromToken(): any {
    const token = localStorage.getItem('token');
    if (token) {
      const decodejwt = jwt_decode.jwtDecode(token);
      console.log(decodejwt);
      return decodejwt;
      
    } else {
      return null;
    }
  }

  signIn(loginData: any){
    return this.http.post(`${apiUrls.localServiceApi}/auth/signin`, loginData);
  }

  signUp(data: any){
    return this.http.post(`${apiUrls.localServiceApi}/auth`, data);
  }

  //Category API Returns

  createCategory(categoryData: any) {
    return this.http.post(`${apiUrls.localServiceApi}/category`, categoryData);
  }

  getCategory(){
    return this.http.get(`${apiUrls.localServiceApi}/category`);
  }


  //Products API Returns
  getProducts(){
    return this.http.get(`${apiUrls.localServiceApi}/product`);
  }

  getProductsById(productId:any){
    return this.http.get(`${apiUrls.localServiceApi}/product/${productId}`);
  }

  //Review API Returns
  getReview(productId:any){
    return this.http.get(`${apiUrls.localServiceApi}/review/${productId}`);
  }

}
