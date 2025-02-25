import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestService } from '../../rest.service';


@Component({
  selector: 'app-course-add',
  imports: [FormsModule, RouterLink,CommonModule ],
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css'
})
export class CourseAddComponent implements OnInit {
  professors: any[] = [];
  course: any = {};

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.loadProfessors();
  }

  loadProfessors(): void {
    this.restService.getProfessors().subscribe(data => {
      this.professors = data;
    });
  }

  add(): void {
    this.restService.postCourse(this.course).subscribe(response => {
      alert('Curso añadido con éxito');
      this.router.navigate(['/course-list']);
    }, error => {
      alert('Error al añadir el curso: ' + error);
    });
  }
}
