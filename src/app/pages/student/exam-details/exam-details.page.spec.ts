import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamDetailsPage } from './exam-details.page';

describe('ExamDetailsPage', () => {
  let component: ExamDetailsPage;
  let fixture: ComponentFixture<ExamDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
