import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UiEssentials } from 'src/app/shared/core/micro-components/ui-essentials.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [UiEssentials, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async loginWithGoogle() {
    try {
      await this.authService.loginWithGoogle();
      // Redirect based on user role (you'll need to implement this logic in AuthService)
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Error logging in with Google:', error);
      // Handle login error (e.g., display an error message)
    }
  }

  ngOnInit() {}
}
