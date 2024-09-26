import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <p [class]="myClasses">
      Hola Fran!
    </p>
  `,
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  // lo asocio al valor de la propiedad class del elemento p
  // y le asigno un objeto con las clases que quiero aplicar
  myClasses = {
    "highlight": true,
    "uppercase": true,
  };
}
