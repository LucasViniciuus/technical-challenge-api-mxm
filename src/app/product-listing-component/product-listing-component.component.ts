import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { NgxMaskApplierService } from 'ngx-mask/lib/ngx-mask-applier.service';
import { ProductEditComponentComponent } from '../product-edit-component/product-edit-component.component';

@Component({
  selector: 'app-product-listing-component',
  standalone: true,
  imports: [CommonModule, NavbarComponentComponent, RouterModule, NgxMaskDirective, ProductEditComponentComponent],
  templateUrl: './product-listing-component.component.html',
  styleUrl: './product-listing-component.component.css'
})
export class ProductListingComponentComponent implements OnInit {
  products: Product[] = [];
  expiringProductsCount: number = 0;
  expiredProductsCount: number = 0;
  validProductsCount: number = 0;

  constructor(private productService: ProductService) { }

  formatPrice(price: number): string {
    return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  ngOnInit(): void {
    this.getAllProducts();
    this.countExpiringProducts();
    this.countExpiredProducts();
    this.countValidProducts();
  }

  countExpiringProducts(): void {
    const currentDate = new Date();
    this.expiringProductsCount = this.products.filter(product => {
      const expirationDate = new Date(product.expirationDate);
      const diffInDays = Math.ceil((expirationDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
      return diffInDays <= 10 && diffInDays >= 0;
    }).length;
  }

  countExpiredProducts(): void {
    const currentDate = new Date();
    this.expiredProductsCount = this.products.filter(product => {
      const expirationDate = new Date(product.expirationDate);
      const diffInDays = Math.ceil((currentDate.getTime() - expirationDate.getTime()) / (1000 * 3600 * 24));
      return diffInDays > 10;
    }).length;
  }

  countValidProducts(): void {
    const currentDate = new Date();
    this.validProductsCount = this.products.filter(product => {
      const expirationDate = new Date(product.expirationDate);
      const diffInDays = Math.ceil((currentDate.getTime() - expirationDate.getTime()) / (1000 * 3600 * 24));
      return diffInDays <= -10;
    }).length;
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(products => this.products = products);
    this.countExpiringProducts();
    this.countExpiredProducts();
    this.countValidProducts();
  }

  deletarProduto(id: number) {
    this.productService.deleteProductById(id).subscribe(
      () => {
        console.log('Produto deletado com sucesso.');
        this.getAllProducts();
        this.countExpiringProducts();
        this.countExpiredProducts();
        this.countValidProducts();
      },
      (error) => {
        console.error('Erro ao deletar o produto', error)
      }
    );
  }
}