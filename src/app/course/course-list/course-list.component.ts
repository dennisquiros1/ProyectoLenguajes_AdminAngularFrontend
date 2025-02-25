import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-course-list',
  imports: [NgIf, NgFor, RouterLink, CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.restService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        console.error('Error fetching courses', error);
      }
    });
  }

  add() {
    throw new Error('Method not implemented.');
  }

  loadCourses(): void {
    this.restService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        alert('Error fetching courses: ' + error.message);
      }
    });
  }

  delete(acronym: string): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.restService.deleteCourse(acronym).subscribe({
        next: (response) => {
          alert('Course deleted successfully');
          this.loadCourses(); // Recargar la lista de cursos
        },
        error: (error) => {
          alert('Error deleting course: ' + error.message);
        }
      });
    }
  }
}