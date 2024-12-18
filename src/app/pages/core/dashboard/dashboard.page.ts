import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicroComponentsModule } from 'src/app/shared/core/micro-components/micro-components.module';
import { FormEssentials } from 'src/app/shared/core/micro-components/form-essentials.module';
import { UiEssentials } from 'src/app/shared/core/micro-components/ui-essentials.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [MicroComponentsModule, FormEssentials, UiEssentials, CommonModule, RouterLink],
})
export class DashboardPage implements OnInit {
  pageTitle = 'Dashboard';
  ngOnInit(): void {
    console.log('Dashboard page');
  }
}
