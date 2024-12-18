import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamResultsPage } from './exam-results.page';

describe('ExamResultsPage', () => {
  let component: ExamResultsPage;
  let fixture: ComponentFixture<ExamResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
