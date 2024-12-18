import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerformanceReportPage } from './performance-report.page';

describe('PerformanceReportPage', () => {
  let component: PerformanceReportPage;
  let fixture: ComponentFixture<PerformanceReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
