import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { error } from 'console';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { NodeRedService } from '../node-red.service';

@Component({
  selector: 'app-product-register-component',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NavbarComponentComponent],
  templateUrl: './product-register-component.component.html',
  styleUrl: './product-register-component.component.css'
})
export class ProductRegisterComponentComponent {

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category: 0,
    status: '',
    supplier: '',
    expirationDate: new Date(),
    unitMeasure: '',
    weight: 0,
    arrivalDate: new Date(),
    team: ''
  };

  constructor(private http: HttpClient, private productService: ProductService, private nodeRedService: NodeRedService){}

  cadastrarProduto() {
    this.productService.productRegister(this.product).subscribe(
      (data) => {
        console.log('Produto cadastrado com sucesso:', data);
        alert('cadastrado com sucesso!');
        this.enviarProdutoParaNodeRed(this.product);
        this.product = {
          id: 0,
          name: '',
          price: 0,
          quantity: 0,
          category: 0,
          status: '',
          supplier: '',
          expirationDate: new Date(),
          unitMeasure: '',
          weight: 0,
          arrivalDate: new Date(),
          team: ''
        };
      },
      (error) => {
        alert('ocorreu algum erro.');
        console.error('Erro ao cadastrar produto:', error)
      }
    );
  }

  enviarProdutoParaNodeRed(produto: Product) {
    this.nodeRedService.enviarProdutoParaNotificaçãoEmail(produto).subscribe(
      (response) => {
        console.log('Solicitação enviada com sucesso para o Node-RED:', response);
      },
      (error) => {
        console.error('Erro ao enviar solicitação para o Node-RED:', error);
      }
    );
  }
 
}