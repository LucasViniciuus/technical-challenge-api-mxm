import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductRegisterComponentComponent } from './product-register-component/product-register-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductRegisterComponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontAngular';
}
