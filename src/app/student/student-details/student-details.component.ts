import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-student-details',
  imports: [RouterLink],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  constructor (public rest: RestService, private activeRoute: ActivatedRoute, private router: Router){}
  student: any;

  ngOnInit(): void {
    this.rest.getStudentById(this.activeRoute.snapshot.params['id']).subscribe((data : {}) => {
      this.student = data
    });
  }
}
