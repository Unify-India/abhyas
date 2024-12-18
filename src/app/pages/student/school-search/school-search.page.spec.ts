import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolSearchPage } from './school-search.page';

describe('SchoolSearchPage', () => {
  let component: SchoolSearchPage;
  let fixture: ComponentFixture<SchoolSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
