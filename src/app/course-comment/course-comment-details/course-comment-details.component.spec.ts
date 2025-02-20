import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCommentDetailsComponent } from './course-comment-details.component';

describe('CourseCommentDetailsComponent', () => {
  let component: CourseCommentDetailsComponent;
  let fixture: ComponentFixture<CourseCommentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCommentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCommentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
