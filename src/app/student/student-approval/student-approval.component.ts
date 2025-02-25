import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-student-approval',
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, FormsModule, RouterLink],
  templateUrl: './student-approval.component.html',
  styleUrl: './student-approval.component.css'
})
export class StudentApprovalComponent implements OnInit {
  @Input() student : any={id: '', name: '', lastName: '', password: '', email: '', likings: '', active: '', register: '', asociation: ''}

  constructor (public rest:RestService, private activeroute : ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    this.rest.getStudentById(this.activeroute.snapshot.params['id']).subscribe((data: {}) =>
      {
        this.student = data;
      });
  }

  saveStudent(){
    this.rest.saveStudent(this.student).subscribe({
      next: (result) => alert(result),
      error: (e) => console.error(e)
    });
    this.router.navigate(['/student-list']);
  }

}
