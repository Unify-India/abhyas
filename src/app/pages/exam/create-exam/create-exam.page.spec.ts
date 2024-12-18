import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateExamPage } from './create-exam.page';

describe('CreateExamPage', () => {
  let component: CreateExamPage;
  let fixture: ComponentFixture<CreateExamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
