import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professor-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.css'
})
export class ProfessorListComponent {
professor: any = [];



delete(arg0: any) {
throw new Error('Method not implemented.');
}

}
