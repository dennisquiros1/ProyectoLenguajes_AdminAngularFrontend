import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-edit',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.css'
})
export class CourseEditComponent implements OnInit {
  courseForm: FormGroup;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      acronym: [''],
      name: [''],
      cycle: [''],
      professor: [''],
      description: [''],
      semester: [''],
      quota: ['']
    });
  }

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.restService.getCourseById(courseId).subscribe(
        (data) => {
          this.courseForm.patchValue({
            acronym: data.acronym,
            name: data.name,
            cycle: data.cycle,
            professor: data.id_Professor,
            description: data.description,
            semester: data.semester,
            quota: data.quota
          });
        },
        (error) => {
          alert('Error fetching course details: ' + error.message);
        }
      );
    }
  }

  onSubmit() {
    const professorId = this.courseForm.value.professor;
    this.restService.getProfessorById(professorId).subscribe(
      (professorData) => {
        if (professorData) {
          const updatedCourse = {
            ...this.courseForm.value,
            id_Professor: professorData.id
          };
          this.restService.postCourse(updatedCourse).subscribe(
            (response) => {
              alert('Course added successfully');
              this.router.navigate(['/course-list']);
            },
            (error) => {
              alert('Error adding course: ' + error.message);
            }
          );
        }
      },
      (error) => {
        alert('Professor ID does not exist');
      }
    );
  }
}