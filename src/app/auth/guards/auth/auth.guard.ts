import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
// import { UserRoles } from '../../../modules/models/user-roles.model'; // Assume you have an enum or model for roles

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    return this.checkAccess();
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

  canDeactivate(_component: unknown): boolean {
    // Example: Prevent navigating away during an active exam
    if (this.authService.isExamInProgress()) {
      return confirm('You have an active exam. Are you sure you want to leave?');
    }
    return true;
  }

  canLoad(): boolean {
    return this.checkAccess();
  }

  private hasValidSubscription(): boolean {
    const user = this.authService.getCurrentUser();
    // Assume `authService` provides a method to check subscriptions
    return this.authService.hasValidSubscription(user?.id ? '' : '');
  }

  private checkAccess(): boolean {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }

    const allowedRoles = this.getAllowedRoles(user.role);
    if (!allowedRoles.includes(user.role)) {
      this.router.navigate(['/not-found']);
      return false;
    }

    return true;
  }

  private getAllowedRoles(role: string): string[] {
    switch (role) {
      case 'Admin':
        return ['Admin'];
      case 'Teacher':
        return ['Teacher'];
      case 'Student':
        return ['Student'];
      case 'School':
        return ['School'];
      default:
        return [];
    }
  }
}
