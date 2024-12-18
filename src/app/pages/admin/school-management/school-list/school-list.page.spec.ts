import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolListPage } from './school-list.page';

describe('SchoolListPage', () => {
  let component: SchoolListPage;
  let fixture: ComponentFixture<SchoolListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
