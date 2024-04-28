import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  supplierRegister(supplier: any): Observable<any> {

    return this.http.post<any>("http://localhost:5204/v1/createSupplier", supplier);
  }

  getAllSuppliers(): Observable<any> {
    return this.http.get<any>("http://localhost:5204/v1/getAllSuppliers");
  }

  getSupplierById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:5204/v1/getSupplierById/${id}`);
  }

  updateSupplierById(supplier: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:5204/v1/updateSupplierById/${id}`, supplier);
  }

  deleteSupplierById(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:5204/v1/deleteSupplier/${id}`);
  }
}
