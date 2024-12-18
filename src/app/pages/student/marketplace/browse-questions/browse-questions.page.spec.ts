import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseQuestionsPage } from './browse-questions.page';

describe('BrowseQuestionsPage', () => {
  let component: BrowseQuestionsPage;
  let fixture: ComponentFixture<BrowseQuestionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseQuestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
