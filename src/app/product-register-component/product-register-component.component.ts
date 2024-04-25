import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { error } from 'console';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-register-component',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './product-register-component.component.html',
  styleUrl: './product-register-component.component.css'
})
export class ProductRegisterComponentComponent {

  product: Product = {
    id: '',
    name: '',
    price: 0,
    quantity: 0,
    category: '',
    status: '',
    supplier: '',
    expirationDate: new Date(),
    unitMeasure: '',
    weight: 0,
    arrivalDate: new Date(),
    team: ''
  };

  constructor(private http: HttpClient, private productService: ProductService){}

  cadastrarProduto() {
    this.productService.productRegister(this.product).subscribe(
      (data) => {
        console.log('Produto cadastrado com sucesso:', data);
      },
      (error) => {
        console.error('Erro ao cadastrar produto:', error)
      }
    );
  }
}