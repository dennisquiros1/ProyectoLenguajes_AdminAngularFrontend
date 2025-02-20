import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-comment-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './news-comment-list.component.html',
  styleUrl: './news-comment-list.component.css'
})
export class NewsCommentListComponent {
delete(arg0: any) {
throw new Error('Method not implemented.');
}
news: any=[];

}
