import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
student: any=[];

delete(arg0: any) {
throw new Error('Method not implemented.');
}

}
