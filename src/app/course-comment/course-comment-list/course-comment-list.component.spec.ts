import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCommentListComponent } from './course-comment-list.component';

describe('CourseCommentListComponent', () => {
  let component: CourseCommentListComponent;
  let fixture: ComponentFixture<CourseCommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCommentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
