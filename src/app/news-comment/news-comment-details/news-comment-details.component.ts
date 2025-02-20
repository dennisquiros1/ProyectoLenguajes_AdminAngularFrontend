import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-comment-details',
  imports: [RouterLink],
  templateUrl: './news-comment-details.component.html',
  styleUrl: './news-comment-details.component.css'
})
export class NewsCommentDetailsComponent {
newsComment: any={};

}
