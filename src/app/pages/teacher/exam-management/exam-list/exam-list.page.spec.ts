import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamListPage } from './exam-list.page';

describe('ExamListPage', () => {
  let component: ExamListPage;
  let fixture: ComponentFixture<ExamListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
