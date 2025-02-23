import { Component , Input} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestService } from '../../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-add',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './professor-add.component.html',
  styleUrl: './professor-add.component.css'
})
export class ProfessorAddComponent {

  @Input() professor: any={id : '', name : '', lastName : '', email : '', password : '', active : 1, photo : '', expertise : ''};

  constructor(public rest: RestService, private router: Router){}

add() {
  if (this.professor.id && this.professor.name && this.professor.lastName && this.professor.email && this.professor.password && this.professor.active) {
    this.rest.addProfessor(this.professor).subscribe({
        next: (result) => console.log(result),
        error: (e) => console.error(e)
        
    });
    this.router.navigate(['/professor-list']);
} else {
    alert("All fields are required.");
}
}

}
