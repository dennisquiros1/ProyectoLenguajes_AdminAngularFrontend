import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-news-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit{
  
  
constructor(public rest:RestService, private router: Router){}

  BreakingNew: any = []; 

  ngOnInit(): void {

    this.getNews();
  }

  getNews(){
    this.rest.getNews().subscribe((data : {}) => {
      this.BreakingNew = data;
    })
  }
  
  delete(id: any) {
    swal.fire({
      title: '¿Estás seguro de que quieres eliminar esta noticia?',
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rest.deleteNewById(id).subscribe({
          next: () => {
            swal.fire('Eliminado', 'La noticia ha sido eliminada', 'success');
            this.getNews(); // Refresh the list after deletion
          },
          error: (e) => swal.fire('Error', 'No se pudo eliminar la noticia', 'error')
        });
      }
    });
  }
  
  
}
