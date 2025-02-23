import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-professor-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.css'
})
export class ProfessorListComponent implements OnInit {
professor: any = [];

constructor(public rest:RestService, private activeRouted : ActivatedRoute){}

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
throw new Error('Method not implemented.');
}

}
