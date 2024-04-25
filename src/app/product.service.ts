import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://127.0.0.1:1880/newProduct';
  constructor(private http: HttpClient) { }

  productRegister(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  getAllProducts(product: any): Observable<any> {
    return this.http.get<any>(this.apiUrl, product);
  }

  getProductById(product: any): Observable<any> {
    return this.http.get<any>(this.apiUrl, product);
  }

  updateProductById(product: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, product);
  }

  deleteProductById(product: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl, product);
  }

}