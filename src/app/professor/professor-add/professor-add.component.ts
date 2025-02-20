import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professor-add',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './professor-add.component.html',
  styleUrl: './professor-add.component.css'
})
export class ProfessorAddComponent {

  professor: any={};

add() {
throw new Error('Method not implemented.');
}

}
