import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-comment-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './news-comment-details.component.html',
  styleUrl: './news-comment-details.component.css'
})
export class NewsCommentDetailsComponent {
newsComment: any={};

  constructor(public rest:RestService, private router: Router, private activeRoute : ActivatedRoute){}  
  
  ngOnInit(): void {

    this.rest.getCommentnew(this.activeRoute.snapshot.params['id']).subscribe((data: any) => {
      
      this.newsComment = data;
  
    });
    
  }

  



}
