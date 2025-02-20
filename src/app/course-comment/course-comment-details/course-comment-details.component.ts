import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-comment-details',
  imports: [RouterLink],
  templateUrl: './course-comment-details.component.html',
  styleUrl: './course-comment-details.component.css'
})
export class CourseCommentDetailsComponent {
courseComment: any={};

}
