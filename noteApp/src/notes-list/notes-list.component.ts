import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NOTES } from '../notes';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes = NOTES;

  show(title: string){
    alert(title);
  }
}
