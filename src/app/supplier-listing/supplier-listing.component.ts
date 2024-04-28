import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { SupplierService } from '../supplier.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-supplier-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './supplier-listing.component.html',
  styleUrl: './supplier-listing.component.css'
})
export class SupplierListingComponent implements OnInit {

  suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.getAllSuppliers();
  }

  getAllSuppliers(): void {
    this.supplierService.getAllSuppliers().subscribe(
      suppliers => {
        this.suppliers = suppliers;
      },
      error => {
        console.error('Erro ao tentar obter lista de fornecedores:', error);
      }
    );
  }

}
