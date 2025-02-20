import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCommentListComponent } from './news-comment-list.component';

describe('NewsCommentListComponent', () => {
  let component: NewsCommentListComponent;
  let fixture: ComponentFixture<NewsCommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCommentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
