import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolDetailsPage } from './school-details.page';

describe('SchoolDetailsPage', () => {
  let component: SchoolDetailsPage;
  let fixture: ComponentFixture<SchoolDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
