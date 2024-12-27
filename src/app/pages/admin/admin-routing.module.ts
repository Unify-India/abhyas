import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'school-management/school-list',
        loadComponent: () => import('./school-management/school-list/school-list.page').then((m) => m.SchoolListPage),
      },
      {
        path: 'school-management/school-details',
        loadComponent: () =>
          import('./school-management/school-details/school-details.page').then((m) => m.SchoolDetailsPage),
      },
      {
        path: 'user-management/user-list',
        loadComponent: () => import('./user-management/user-list/user-list.page').then((m) => m.UserListPage),
      },
      {
        path: 'user-management/user-details',
        loadComponent: () => import('./user-management/user-details/user-details.page').then((m) => m.UserDetailsPage),
      },
      {
        path: 'reports/performance-report',
        loadComponent: () =>
          import('./reports/performance-report/performance-report.page').then((m) => m.PerformanceReportPage),
      },
      {
        path: 'reports/activity-report',
        loadComponent: () => import('./reports/activity-report/activity-report.page').then((m) => m.ActivityReportPage),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
