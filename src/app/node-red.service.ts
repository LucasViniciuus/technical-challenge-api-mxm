import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeRedService {

  private nodeRedUrl = 'http://127.0.0.1:1880/newProduct';

  constructor(private http: HttpClient) { }

  enviarProdutoParaNotificaçãoEmail(produto: Product): Observable<any> {
    return this.http.post<any>(this.nodeRedUrl, produto);
  }
}
