import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/auth/service/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, TranslateModule],
})
export class DashboardPage implements OnInit {
  pageTitle = 'Dashboard';

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
    const browserLang: any = this.translate.getBrowserLang();
    this.translate.use(browserLang);
  }

  ngOnInit() {}

  loginAs(role: string) {
    this.authService.login(role);
  }
}
