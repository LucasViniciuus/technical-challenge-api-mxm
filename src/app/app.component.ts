import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductRegisterComponentComponent } from './product-register-component/product-register-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductListingComponentComponent } from './product-listing-component/product-listing-component.component';
import { CommonModule } from '@angular/common';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponentComponent],
  //tirei formsmodule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Arniway - A sua solução para gestão de estoque';
}
