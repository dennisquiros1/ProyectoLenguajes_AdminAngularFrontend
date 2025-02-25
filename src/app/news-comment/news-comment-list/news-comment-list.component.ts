import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-news-comment-list',
  imports: [NgIf,NgFor,RouterLink, CommonModule],
  templateUrl: './news-comment-list.component.html',
  styleUrl: './news-comment-list.component.css'
})
export class NewsCommentListComponent implements OnInit{
  
  news: any=[];

  constructor(public rest:RestService, private router: Router, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {



    this.getComments();
  }

  getComments(){
    this.rest.getAllNewsComments(this.activeRoute.snapshot.params['id']).subscribe((data : {}) => {
      this.news = data;
    })
  }
  
  delete(id: any) {
    swal.fire({
      title: '¿Estás seguro de que quieres eliminar este comentario?',
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rest.deleteNewsComment(id).subscribe({
          next: () => {
            swal.fire('Eliminado', 'El comentario ha sido eliminado', 'success');
            this.getComments(); // Refresh the list after deletion
          },
          error: (e) => swal.fire('Error', 'No se pudo eliminar el comentario', 'error')
        });
      }
    });
  }
  
}
