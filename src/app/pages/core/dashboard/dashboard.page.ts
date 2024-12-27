import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class DashboardPage implements OnInit {
  pageTitle = 'Dashboard';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {}

  loginAs(role: string) {
    this.authService.login(role);
  }
}
