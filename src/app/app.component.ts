import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductRegisterComponentComponent } from './product-register-component/product-register-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductRegisterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontAngular';
}
