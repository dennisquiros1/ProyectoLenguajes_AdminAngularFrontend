import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-comment-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './course-comment-list.component.html',
  styleUrl: './course-comment-list.component.css'
})
export class CourseCommentListComponent {
courseComment: any = []


  delete(arg0: any) {
  throw new Error('Method not implemented.');
  }

}
