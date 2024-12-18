import { CanActivateChildFn } from '@angular/router';

export const roleGuardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
