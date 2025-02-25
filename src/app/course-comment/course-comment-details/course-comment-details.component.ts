import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-course-comment-details',
  imports: [RouterLink],
  templateUrl: './course-comment-details.component.html',
  styleUrls: ['./course-comment-details.component.css']
})
export class CourseCommentDetailsComponent implements OnInit {
  courseComment: any = {};

  constructor(
    private restService: RestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const commentId = this.route.snapshot.paramMap.get('id');
    if (commentId) {
      this.loadCommentDetails(commentId);
    }
  }

  loadCommentDetails(commentId: string): void {
    this.restService.getCommentById(commentId).subscribe((data: any) => {
      this.courseComment = data;
    });
  }
}