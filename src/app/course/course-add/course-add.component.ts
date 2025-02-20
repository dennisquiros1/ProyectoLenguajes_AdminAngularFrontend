import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-course-add',
  imports: [FormsModule, RouterLink],
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css'
})
export class CourseAddComponent {

  course: any = {};

add() {
throw new Error('Method not implemented.');
}


}
