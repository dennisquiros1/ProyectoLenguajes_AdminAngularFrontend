import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';


@Component({
  selector: 'app-news-details',
  imports: [RouterLink, NgIf, FormsModule, CommonModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent implements OnInit{
  

  news: any = {};


  constructor(public rest:RestService, private router: Router, private activeRoute : ActivatedRoute){}  
  
  ngOnInit(): void {

    this.rest.getNewById(this.activeRoute.snapshot.params['id']).subscribe((data: any) => {
      
      this.news = data;
  
    });
    
  }

  


  
  
}
