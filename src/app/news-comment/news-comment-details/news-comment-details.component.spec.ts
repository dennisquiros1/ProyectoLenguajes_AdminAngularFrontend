import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCommentDetailsComponent } from './news-comment-details.component';

describe('NewsCommentDetailsComponent', () => {
  let component: NewsCommentDetailsComponent;
  let fixture: ComponentFixture<NewsCommentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCommentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCommentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
