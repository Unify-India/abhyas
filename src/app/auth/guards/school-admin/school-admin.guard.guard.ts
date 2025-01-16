import { CanActivateFn } from '@angular/router';

export const schoolAdminGuardGuard: CanActivateFn = (_route, _state) => {
  return true;
};
