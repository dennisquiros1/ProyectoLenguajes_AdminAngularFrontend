import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-news-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {

  news: any = [];


  delete(arg0: any) {
throw new Error('Method not implemented.');
}

}
