import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityReportPage } from './activity-report.page';

describe('ActivityReportPage', () => {
  let component: ActivityReportPage;
  let fixture: ComponentFixture<ActivityReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
