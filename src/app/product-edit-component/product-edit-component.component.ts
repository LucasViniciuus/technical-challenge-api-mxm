import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/Product';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-product-edit-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit-component.component.html',
  styleUrl: './product-edit-component.component.css'
})
export class ProductEditComponentComponent implements OnInit {
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
  productId!: number;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.getProductDetails(this.productId);
    });
  }

  getProductDetails(id: number): void {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }
  atualizarProduto() {
    this.productService.updateProductById(this.product, this.product.id).subscribe(
      (data) => {
        console.log('Produto editado com sucesso.', data);
        alert('editado com sucesso!');
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
      }
    );
    this.router.navigate(['/products']);
  }
}

