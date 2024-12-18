import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionListPage } from './question-list.page';

describe('QuestionListPage', () => {
  let component: QuestionListPage;
  let fixture: ComponentFixture<QuestionListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
