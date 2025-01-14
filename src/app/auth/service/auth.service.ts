import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; // Import environment

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: { id: string; role: string; subscriptionExpiry: Date } | null = null;
  private authStatusListener = new BehaviorSubject<{ id: string; role: string } | null>(null);
  private apiKey = environment.firebase.apiKey; // Use API key from environment
  private authUrl = `${environment.emulatorUrls.auth}/identitytoolkit.googleapis.com/v1/accounts`;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.loadUserFromSession();
  }

  private loadUserFromSession() {
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
      this.authStatusListener.next(this.currentUser);
    }
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  async loginWithEmailAndPassword(email: string, password: string, role: string) {
    try {
      const response: any = await this.http
        .post(`${this.authUrl}:signInWithPassword?key=${this.apiKey}`, {
          email,
          password,
          returnSecureToken: true,
        })
        .toPromise();

      this.currentUser = {
        id: response.localId,
        role,
        subscriptionExpiry: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      };
      sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.authStatusListener.next(this.currentUser);
      this.redirectToDashboard(role);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('currentUser');
    this.authStatusListener.next(null);
    this.router.navigate(['/login']);
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  private redirectToDashboard(role: string) {
    switch (role) {
      case 'Admin':
        this.router.navigate(['/admin/dashboard']);
        break;
      case 'Teacher':
        this.router.navigate(['/teacher/dashboard']);
        break;
      case 'Student':
        this.router.navigate(['/student/dashboard']);
        break;
      case 'School':
        this.router.navigate(['/school/profile']);
        break;
      default:
        this.router.navigate(['/dashboard']);
        break;
    }
  }

  hasValidSubscription(userId: string): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;

    const now = new Date();
    return user.subscriptionExpiry && new Date(user.subscriptionExpiry) > now;
  }

  isExamInProgress(): boolean {
    return false;
  }
}
