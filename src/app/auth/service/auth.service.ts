import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private currentUser: { id: string; role: string; subscriptionExpiry: Date } | null = null;

  getCurrentUser() {
    // Replace with your actual logic (e.g., fetch from localStorage or backend)
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  hasValidSubscription(userId: string): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;

    // Check subscription validity
    const now = new Date();
    return user.subscriptionExpiry && new Date(user.subscriptionExpiry) > now;
  }

  isExamInProgress(): boolean {
    // Replace with actual logic (e.g., check ongoing exam status from a service)
    return false;
  }
}
