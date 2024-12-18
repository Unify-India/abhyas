import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinRequestsPage } from './join-requests.page';

describe('JoinRequestsPage', () => {
  let component: JoinRequestsPage;
  let fixture: ComponentFixture<JoinRequestsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
