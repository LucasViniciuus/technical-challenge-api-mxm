import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})

export class NavbarComponentComponent {

}
