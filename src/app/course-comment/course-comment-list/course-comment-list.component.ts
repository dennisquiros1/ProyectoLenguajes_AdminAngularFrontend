import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-comment-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './course-comment-list.component.html',
  styleUrls: ['./course-comment-list.component.css']
})
export class CourseCommentListComponent implements OnInit {
  courseComment: any[] = [];
  acronym: string | null = null;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.acronym = this.route.snapshot.paramMap.get('id');
    if (this.acronym) {
      this.loadComments();
    }
  }

  loadComments(): void {
    if (this.acronym) {
      this.restService.getCommentByCourseAcronym(this.acronym).subscribe((data: any[]) => {
        this.courseComment = data;
      });
    }
  }

  delete(commentId: number): void {
    const confirmed = confirm('¿Estás seguro de que deseas eliminar este comentario?');
    if (confirmed) {
      this.restService.deleteCommentCourse(commentId).subscribe(response => {
        alert('Eliminado con exito');
        this.loadComments();
      }, error => {
        alert('Error al eliminar el comentario: ' + error);
      });
    }
  }
}