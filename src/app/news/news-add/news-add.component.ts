import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './news-add.component.html',
  styleUrl: './news-add.component.css'
})
export class NewsAddComponent {
  
  constructor(public rest: RestService, private router: Router) {}

  selectedFile: File | null = null;

  @Input() news = {
    date: '',
    photo: '',
    paragraph:'',
    title:''
  };

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.news.photo = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  add() {
    this.news.date = new Date().toISOString().split('T')[0];

    if (this.news.photo.startsWith("data:image")) {
      this.news.photo = this.news.photo.split(",")[1];
    }

    if (this.news.photo && this.news.paragraph && this.news.title) {
      this.rest.postNew(this.news).subscribe({
        next: (result) => alert("todo good"),
        error: (e) => alert("falla")
      }); 
      this.router.navigate(['/news-list']);
    } else {
      alert("All fields are required.");
    }
  }
}
