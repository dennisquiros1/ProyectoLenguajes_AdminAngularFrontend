import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './news-edit.component.html',
  styleUrl: './news-edit.component.css'
})
export class NewsEditComponent {
add() {
throw new Error('Method not implemented.');
}
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

}
