import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { MenuData } from './shared/core/menu/menu.data';
import { UsedIcons } from './shared/core/icons/used-icons';
import { AuthService } from './auth/service/auth.service';
import { TranslateConfigService } from './services/translation/translation.service';
import { ApiService } from './shared/services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    TranslateModule,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  appPages = MenuData.defaultAppPages;
  icons = UsedIcons.icons;
  isLoggedIn = false;
  private authListenerSubs!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService,
    private translateConfigService: TranslateConfigService,
    private apiService: ApiService,
  ) {
    addIcons(this.icons);
  }

  ngOnInit() {
    this.updateMenu();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe((user) => {
      this.updateMenu();
    });
    // Call the RTDB and log data to console
    this.apiService
      .getDataFromRealtimeDB('/translations')
      .then((data) => {
        console.log('Fetched data from RTDB:', data);
      })
      .catch((error) => {
        console.error('Error fetching data from RTDB:', error);
      });
  }

  ngAfterViewInit() {
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translateConfigService.fetchTranslations(browserLang);
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  updateMenu() {
    const user = this.authService.getCurrentUser();
    this.isLoggedIn = !!user;
    if (!user) {
      this.appPages = MenuData.defaultAppPages;
    } else {
      switch (user.role) {
        case 'Admin':
          this.appPages = MenuData.adminAppPages;
          break;
        case 'Teacher':
          this.appPages = MenuData.teacherAppPages;
          break;
        case 'Student':
          this.appPages = MenuData.studentAppPages;
          break;
        case 'School':
          this.appPages = MenuData.schoolAppPages;
          break;
        default:
          this.appPages = MenuData.defaultAppPages;
          break;
      }
    }
  }

  logout() {
    this.authService.logout();
  }
}
