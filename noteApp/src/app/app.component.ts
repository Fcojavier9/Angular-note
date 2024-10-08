import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, HeaderComponent, NotesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My Notes';
  status = 'operative';
}
