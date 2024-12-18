import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Create a mock router
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useValue: routerSpy }],
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false and navigate to /login if not authenticated', () => {
    spyOn(guard as any, 'checkAuthentication').and.returnValue(false); // Mock authentication check

    const result = guard.canActivate();

    expect(result).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should return true if authenticated', () => {
    spyOn(guard as any, 'checkAuthentication').and.returnValue(true); // Mock authentication check

    const result = guard.canActivate();

    expect(result).toBe(true);
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
