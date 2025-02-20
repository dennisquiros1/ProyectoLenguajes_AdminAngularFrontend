import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professor-details',
  imports: [RouterLink],
  templateUrl: './professor-details.component.html',
  styleUrl: './professor-details.component.css'
})
export class ProfessorDetailsComponent {
Professor: any={};

}
