import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-news-details',
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent {
  selectedFile: File | null = null;
  
  news = {
    image: '',
    paragraph:'',
    name:'',
    date:'',
    id:''
  };

}
