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
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
  }

  ngOnInit() {}

  loginAs(role: string) {
    this.authService.login(role);
  }
}
