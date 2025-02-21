import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-student-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

students: any=[];

constructor (public rest:RestService){}

ngOnInit(): void {
  this.getStudents()
}

getStudents(){
  this.rest.getStudents().subscribe((data : {}) =>{
    this.students = data;
  })
}

delete(arg0: any) {
throw new Error('Method not implemented.');
}

}
