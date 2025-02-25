import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';


@Component({
  selector: 'app-course-details',
  imports: [RouterLink],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  course: any = {};
  professorName: string = '';

  constructor(private restService: RestService, private route: ActivatedRoute) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.restService.getCourseById(courseId).subscribe(
        (data) => {
          this.course = data;
          this.getProfessorName(this.course.id_Professor);
        },
        (error) => {
          console.error('Error fetching course details', error);
        }
      );
    }
  }

  getProfessorName(professorId: string) {
    this.restService.getProfessorById(professorId).subscribe(
      (data) => {
        this.professorName = data.name;
      },
      (error) => {
        console.error('Error fetching professor details', error);
      }
    );
  }
}