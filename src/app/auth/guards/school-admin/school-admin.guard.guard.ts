import { CanActivateFn } from '@angular/router';

export const schoolAdminGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
