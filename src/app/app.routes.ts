import { RouterModule, Routes } from '@angular/router';
import { ProductRegisterComponentComponent } from './product-register-component/product-register-component.component';
import { ProductListingComponentComponent } from './product-listing-component/product-listing-component.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductEditComponentComponent } from './product-edit-component/product-edit-component.component';
import { SupplierComponentComponent } from './supplier-component/supplier-component.component';
import { SupplierListingComponent } from './supplier-listing/supplier-listing.component';

export const routes: Routes = [
    { path: 'productRegister', component: ProductRegisterComponentComponent },
    { path: 'products', component: ProductListingComponentComponent },
    { path: 'products/:id/edit', component: ProductEditComponentComponent },
    { path: 'suppliers', component: SupplierListingComponent},
    { path: 'supplierRegister', component: SupplierComponentComponent},
    { path: '', component: HomeComponentComponent, pathMatch: 'full' } ,
    { path: '**', redirectTo: '' } ,
   
];
