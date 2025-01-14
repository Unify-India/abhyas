import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
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
    private alertController: AlertController,
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

  async loginAs(role: string) {
    let email = '';
    const password = '123456';

    if (role === 'Admin') {
      email = 'admin@unify.com';
    } else if (role === 'Teacher') {
      email = 'teacher@unify.com';
    }

    const alert = await this.alertController.create({
      header: `Login as ${role}`,
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          value: email,
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          value: password,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Login',
          handler: (data) => {
            this.authService.loginWithEmailAndPassword(data.email, data.password, role);
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {}
}
