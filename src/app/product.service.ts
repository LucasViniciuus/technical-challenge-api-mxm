import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:5204/v1/createProduct";
  constructor(private http: HttpClient) { }

  productRegister(product: any): Observable<any> {
    product.arrivalDate = '2023-05-03';
    product.expirationDate = '2023-06-06';
    return this.http.post<any>(this.apiUrl, product);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>("http://localhost:5204/v1/getAllProducts");
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:5204/v1/getProductById/${id}`);
  }

  updateProductById(product: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:5204/v1/updateProductById/${id}`, product);
  }

  deleteProductById(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:5204/v1/deleteProduct/${id}`);
  }
}