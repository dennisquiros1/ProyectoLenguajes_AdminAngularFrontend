import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './news-add.component.html',
  styleUrl: './news-add.component.css'
})
export class NewsAddComponent {
  selectedFile: File | null = null;
  
  news = {
    image: '',
    paragraph:'',
    name:''
  };

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.news.image = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadImage() {
    if (this.selectedFile) {
    
    }
  }

  add() {
    console.log('Agregar noticia:', this.news);
  }
}
