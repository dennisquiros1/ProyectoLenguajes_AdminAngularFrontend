import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  course:any = []

add() {
throw new Error('Method not implemented.');
}

delete(arg0: any) {
throw new Error('Method not implemented.');
}

}
