import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.css'
})
export class ProfessorListComponent implements OnInit {
professor: any = [];

constructor(public rest:RestService, private router: Router){}

ngOnInit(): void {
  this.getProfessors();
}

getProfessors(){
  this.rest.getProfessors().subscribe((data : {}) => {
    this.professor = data;
  })
}

delete(id: any) {
  this.rest.deleteProfessor(id).subscribe((data: {}) => {
    alert(JSON.stringify(data));
  });
  this.router.navigate(['/professor-list']);
}

}
