import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesReportPage } from './sales-report.page';

describe('SalesReportPage', () => {
  let component: SalesReportPage;
  let fixture: ComponentFixture<SalesReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
