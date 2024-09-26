import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  template: `
    <h1>{{title}}</h1>
    <app-menu></app-menu>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title= 'Mis Notas';
}
