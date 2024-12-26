import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UiEssentials } from 'src/app/shared/core/micro-components/ui-essentials.module';
import { logoGoogle } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  pageTitle = 'Welcome to Abhyas';
  icons = { logoGoogle };
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    addIcons(this.icons);
  }

  async loginWithGoogle() {
    try {
      // await this.authService.loginWithGoogle();
      // Redirect based on user role (you'll need to implement this logic in AuthService)
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Error logging in with Google:', error);
      // Handle login error (e.g., display an error message)
    }
  }

  loginAs(role: string) {
    this.authService.login(role);
  }

  ngOnInit() {}
}
