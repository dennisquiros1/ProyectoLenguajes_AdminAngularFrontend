import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, TitleStrategy } from '@angular/router';
import { RestService } from '../../rest.service';
import { title } from 'process';
import { totalmem } from 'os';
import swal from 'sweetalert2';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './news-edit.component.html',
  styleUrl: './news-edit.component.css'
})
export class NewsEditComponent implements OnInit{
  



  @Input() newsUpdated = {
    idNew: '',
    date: '',
    photo: '',
    paragraph:'',
    title:''
  };

  
  newsPrev = {
    date: '',
    photo: '',
    paragraph:'',
    title:''
  };

    constructor(public rest: RestService, private router: Router, private activeRoute : ActivatedRoute) {}
  
  ngOnInit(): void {

    this.rest.getNewById(this.activeRoute.snapshot.params['id']).subscribe((data: any) => {
      this.newsPrev = data;
      this.newsUpdated.photo = this.newsPrev.photo; 
    });


  }

  
  add() {
    swal.fire({
      title: '¿Seguro que quieres editar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.newsUpdated.date = new Date().toISOString().split('T')[0];
        this.newsUpdated.idNew = this.activeRoute.snapshot.params['id'];
  
        if (this.newsPrev.photo.startsWith("data:image")) {
          this.newsUpdated.photo = this.newsPrev.photo.split(",")[1];
        }
  
        if (this.newsUpdated.photo && this.newsUpdated.paragraph && this.newsUpdated.title) {
          this.rest.postNew(this.newsUpdated).subscribe({
            next: (result) => swal.fire('Éxito', 'Noticia editada', 'success'),
            error: (e) => swal.fire('Error', 'No se pudo editar la noticia', 'error')
          }); 
          this.router.navigate(['/news-list']);
        } else {
          swal.fire('Advertencia', 'Todos los campos deben de estar llenos', 'warning');
        }
      }
    });
  }
  
  
  selectedFile: File | null = null;
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.newsPrev.photo = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }


}
