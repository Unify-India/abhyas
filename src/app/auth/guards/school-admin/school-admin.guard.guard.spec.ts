import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { schoolAdminGuardGuard } from './school-admin.guard.guard';

describe('schoolAdminGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => schoolAdminGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
