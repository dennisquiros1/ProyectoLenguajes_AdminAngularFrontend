import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-professor-details',
  imports: [RouterLink,],
  templateUrl: './professor-details.component.html',
  styleUrl: './professor-details.component.css'
})
export class ProfessorDetailsComponent implements OnInit{
Professor: any={};

constructor(public rest: RestService, private activeRoute : ActivatedRoute, private router: Router){}

ngOnInit(): void {
  this.rest.getProfessorById(this.activeRoute.snapshot.params['id']).subscribe((data : {}) =>{
    this.Professor = data;
  })
}

}
