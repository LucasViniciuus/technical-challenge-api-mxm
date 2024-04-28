import { Component } from '@angular/core';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [NavbarComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
