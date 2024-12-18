import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { roleGuardGuard } from './role.guard.guard';

describe('roleGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => roleGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
