import { Component } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../supplier.service';
import { CommonModule } from '@angular/common'; 
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './supplier-component.component.html',
  styleUrl: './supplier-component.component.css'
})
export class SupplierComponentComponent {

  supplier: Supplier = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    cnpj: '',
    supplierType: 0,
    legalRepresentative: ''
  };

  constructor(private supplierService: SupplierService, private router: Router) { }

  cadastrarFornecedor() {
    this.supplierService.supplierRegister(this.supplier).subscribe(
      (data) => {
        console.log('Fornecedor cadastrado com sucesso.', data);
        alert('Fornecedor cadastrado com sucesso!');
        this.resetForm();
        this.navigateToSupplierList();
      },
      (error) => {
        console.error('Erro ao cadastrar fornecedor:', error);
        alert('Erro ao cadastrar fornecedor!');
      }
    );
  }

  resetForm() {
    this.supplier = {
      id: 0,
      name: '',
      phone: '',
      email: '',
      cnpj: '',
      supplierType: 0,
      legalRepresentative: ''
    };
    
  }
  navigateToSupplierList() {
    this.router.navigate(['/suppliers']);
  }

}
