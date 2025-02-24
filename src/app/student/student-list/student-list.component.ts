import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterLink],
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

delete(id: any) {
  try{
    this.rest.deleteStudent(id).subscribe((data: {}) => {
      alert('Estudiante eliminado exitosamente.');
      this.getStudents();
    })
  } catch (error){
    alert('Hubo un error tratando de eliminar al estudiante. Intente de nuevo');

  }
}

}
