import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { error } from 'console';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-register-component',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './product-register-component.component.html',
  styleUrl: './product-register-component.component.css'
})
export class ProductRegisterComponentComponent {
nome: string = '';
identificacao: string = '';
preco: number = 0;
quantidade: number = 0;


  constructor(private http: HttpClient){}

  cadastrarProduto() {

    const url = 'http://ec2-3-83-149-60.compute-1.amazonaws.com:1880/cadastroProduto';
    const produto = {
      nome: this.nome,
      identificacao: this.identificacao,
      preco: this.preco,
      quantidade: this.quantidade
    };

    this.http.post(url, produto).subscribe(
      response => {
        console.log('produto cadastrado com sucesso.', response);
      },
      error => {
        console.error('Erro ao cadastrar produto', error);
      }
    );
  }

  

}
