import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateQuestionPage } from './create-question.page';

describe('CreateQuestionPage', () => {
  let component: CreateQuestionPage;
  let fixture: ComponentFixture<CreateQuestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
