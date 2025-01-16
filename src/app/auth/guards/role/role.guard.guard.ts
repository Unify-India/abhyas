import { CanActivateChildFn } from '@angular/router';

export const roleGuardGuard: CanActivateChildFn = (_childRoute, _state) => {
  return true;
};
